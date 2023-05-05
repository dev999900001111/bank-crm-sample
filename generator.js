const fs = require('fs'),
  ts = require("typescript"),
  path = require('path'),
  HttpsProxyAgent = require('https-proxy-agent'),
  { Configuration, OpenAIApi } = require("openai");
const HISTORY_DIRE = `./history`;

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

// console.log(process.env.OPENAI_API_KEY);

// キャメルケースをケバブケースに変換する関数
function toKebabCase(str) { return str.replace(/[A-Z]/g, match => `-${match.toLowerCase()}`).replace(/^-/g, ''); }
// ケバブケースをキャメルケースに変換する関数
function toCamelCase(str) { return str.replace(/[- /]([a-z])/g, (_, match) => match.toUpperCase()); }
function capitalize(str) { return str.charAt(0).toUpperCase() + str.slice(1); }
function decapitalize(str) { return str.charAt(0).toLowerCase() + str.slice(1); }
// function tsForm(code) { return prettier.format(code, { printWidth: 1024, tabWidth: 0, useTabs: false, semi: true, singleQuote: true, trailingComma: "es5", bracketSpacing: true, parser: 'typescript', }); }
function tsForm(code) {
  // const code = "Hello world;\nThis is a test.\nI am learning JavaScript;\nThis is fun!";
  const lines = code.replace(/\r/g, '').split("\n");
  const result = lines.map((line, index) => {
    if (index === lines.length - 1 || line.endsWith(";")) {
      return line.trim() + '\n'; // 行末が;で終わる行または最後の行はそのまま返す
    } else {
      return line.trim(); // 行頭と行末のスペースを削除する
    }
  }).join("");
  return result;
}
function spaceNormalize(str) {
  const lines = str.split("\n"); // 改行コードで分割
  const result = lines.map(line => {
    const matches = line.match(/^(\s*)(\S+(?:\s+\S+)*)\s*$/); // 行頭のスペースと行末のスペースを取り出す
    if (!matches || matches.length < 3) { return line; }
    const indent = matches[1]; // 行頭のスペース
    const words = matches[2].replace(/\s+/g, " "); // スペースの連続を1つのスペースに置換
    return indent + words;
  }).join("\n"); // 改行コードで結合
  return result;
}
function formatDateWithMilliseconds(date) {
  const year = date.getFullYear(); // 西暦を取得
  const month = ("0" + (date.getMonth() + 1)).slice(-2); // 月を取得（0埋め）
  const day = ("0" + date.getDate()).slice(-2); // 日を取得（0埋め）
  const hours = ("0" + date.getHours()).slice(-2); // 時を取得（0埋め）
  const minutes = ("0" + date.getMinutes()).slice(-2); // 分を取得（0埋め）
  const seconds = ("0" + date.getSeconds()).slice(-2); // 秒を取得（0埋め）
  const milliseconds = ("00" + date.getMilliseconds()).slice(-3); // ミリ秒を取得（0埋め）

  const formattedDate = year + month + day + hours + minutes + seconds + milliseconds; // yyyymmddhhmmssSSS形式の文字列を生成
  return formattedDate;
}
function toChunkArray(arr, chunkSize) {
  return arr.reduce((acc, _, i) => {
    if (i % chunkSize === 0) acc.push(arr.slice(i, i + chunkSize));
    return acc;
  }, []);
}


function makeModule() {
  const directoryPath = './src'; // 検索するディレクトリのパス

  // ディレクトリ内を再帰的に検索する関数
  function searchDirectory(directoryPath, moduleImports) {
    // ディレクトリ内のファイル一覧を取得する
    const files = fs.readdirSync(directoryPath);

    // ディレクトリ内のファイルを順に処理する
    files.forEach(function (file) {
      const filePath = path.join(directoryPath, file);

      // ファイルがディレクトリの場合、再帰的に検索する
      if (fs.statSync(filePath).isDirectory()) {
        searchDirectory(filePath, moduleImports);
      } else if (file === 'app.component.ts') {

      } else if (filePath.endsWith('.component.ts')) {
        // ファイルがAngularコンポーネントの場合、モジュールにインポート文を追加する
        const componentName = path.basename(filePath, '.component.ts');
        const className = `${capitalize(toCamelCase(componentName))}Component`;
        const importStatement = `import { ${className} } from './${path.relative('./src/app', filePath).replace(/\\/g, '/').replace(/.ts$/g, '')}';`;
        moduleImports.push([importStatement, className]);
      }
    });
  }

  // Angularモジュールファイルを生成する関数
  function generateModuleFile(moduleImports) {
    const importsSection = moduleImports.map(obj => obj[0]).join('\n');
    const className = moduleImports.map(obj => `    ${obj[1]},`).join('\n');
    const routeImports = moduleImports.filter(obj => obj[0].indexOf('/pages/') >= 0).map(obj => obj[0]).join('\n');
    const routingPath = moduleImports.filter(obj => obj[0].indexOf('/pages/') >= 0).map(obj => `    { path: '${toKebabCase(obj[1]).replace(/-component.*/g, '')}', component: ${obj[1]} },`).join('\n');
    const appRoutingModuleContent = `
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

${routeImports}

const routes: Routes = [
${routingPath}
  { path: '**', redirectTo: 'login' } // 未定義のルートの場合はログインページにリダイレクトする
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
`;

    const moduleFileContent = `
import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule, DatePipe, registerLocaleData } from '@angular/common';
import localeJa from '@angular/common/locales/ja';
// ロケールデータを登録
registerLocaleData(localeJa);

import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatNativeDateModule } from '@angular/material/core';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSliderModule } from '@angular/material/slider';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTabsModule } from '@angular/material/tabs';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatChipsModule } from '@angular/material/chips';
import { MatProgressBarModule } from '@angular/material/progress-bar';

import { NgChartsModule } from 'ng2-charts';
import 'chartjs-adapter-moment';
import { MatTimepickerModule } from 'mat-timepicker';
    
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

${importsSection}

@NgModule({
imports: [
  BrowserModule,
  AppRoutingModule,
  BrowserAnimationsModule,
  CommonModule,
  FormsModule,
  HttpClientModule,
  ReactiveFormsModule,
  MatTimepickerModule,
  NgChartsModule,
  MatButtonModule,
  MatCheckboxModule,
  MatDatepickerModule,
  MatExpansionModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatMenuModule,
  MatNativeDateModule,
  MatRadioModule,
  MatSelectModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatTableModule,
  MatToolbarModule,
  MatPaginatorModule,
  MatSortModule,
  MatTabsModule,
  MatProgressSpinnerModule,
  MatDialogModule,
  MatCardModule,
  MatGridListModule,
  MatAutocompleteModule,
  MatListModule,
  MatSidenavModule,
  MatChipsModule,
  MatProgressBarModule,
],
declarations: [
  AppComponent,
${className}
],
providers: [
  { provide: LOCALE_ID, useValue: 'ja-JP' },
  DatePipe,
  { provide: HTTP_INTERCEPTORS, useClass: ApiInterceptor, multi: true },
],
bootstrap: [AppComponent]
})
export class AppModule { }
`;
    // モジュールファイルを上書きする
    fs.writeFileSync(`./src/app/app.module.ts`, moduleFileContent);
    fs.writeFileSync(`./src/app/app-routing.module.ts`, appRoutingModuleContent);
  }

  // Angularモジュールに必要なコンポーネントのインポート文を格納する配列
  const moduleImports = [];

  // ディレクトリ内を再帰的に検索する
  searchDirectory(directoryPath, moduleImports);

  // Angularモジュールファイルを生成する
  generateModuleFile(moduleImports);

  console.log(`Angularモジュールファイルを生成しました。`);
}
function makeInterceptor() {
  const text = `import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable()
export class ApiInterceptor implements HttpInterceptor {
    constructor() { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let url = request.url.replace(/https?:\/\/[^/]+/g, '').replace('//', '/').replace(/^\//g, '');
        let method = request.method;
        console.log(\`\${method} \${url}\`);
        // 開発環境の場合はローカルのjsonファイルに向ける
        if (!environment.production) {
            url = \`assets/mock/\${url}-\${request.method}.json\`;
            method = 'GET';
        } else {
            // 本番環境の場合は環境変数で指定したAPIのエンドポイントに向ける
            url = \`\${''}/\${url}\`;
        }
        request = request.clone({ url, method });
        return next.handle(request);
    }
}`;
  fs.writeFileSync(`./src/app/api.interceptor.ts`, text);
}

// function loadPrompts() {
//     // この関数は、特定のディレクト配下にあるファイルを全て読み込み、連想配列として返却する機能です。
//     const files = [
//         ...fs.readdirSync("./docs/").filter(filename => filename.startsWith('data-') && filename.endsWith(".md")).map(filename => `./docs/${filename}`)
//     ];
//     const promptMap = {};
//     files.forEach(filename => {
//         const text = fs.readFileSync(filename, "utf-8");
//         promptMap[filename] = text;
//     });
//     return promptMap;
// }
// const prompts = loadPrompts();
// console.log(prompts);

function genIndex(dire = `./src/app/services`) {
  const indexText = fs.readdirSync(dire)
    // .ts かつ .spec.ts ではないファイルを抽出
    .filter(filename => filename.endsWith(".ts") && !filename.endsWith(".spec.ts") && filename !== "index.ts")
    // ファイルを読み込み
    .map(filename => `export * from './${filename.replace(/.ts$/g, '')}';`)
    // 改行コードで結合
    .join('\n');
  // index.ts として書き出し
  fs.writeFileSync(`${dire}/index.ts`, indexText, 'utf-8');
  return indexText;
}

function convertCodeBlocks(text) {
  let split = text.split(/```.*\n|```$/, -1);
  return split.map((code, index) => { if (code.length === 0) { return code; } else { if (index % 2 === 1) { return code; } else { return code.split('\n').map(line => `// ${line}`).join('\n'); } } }).join('');
}

function loadDefs(files = ["./src/app/models.ts", ...fs.readdirSync("./src/app/services").filter(filename => filename.endsWith(".ts")).map(filename => `./src/app/services/${filename}`)]) {
  const classes = {};
  files.forEach(filename => {
    const sourceCode = fs.readFileSync(filename, "utf-8");
    // const sourceFile = ts.createSourceFile(filename, sourceCode, ts.ScriptTarget.Latest);
    const sourceFile = ts.createSourceFile("test.ts", sourceCode, ts.ScriptTarget.Latest);
    sourceFile.statements.forEach(statement => {
      if (ts.isClassDeclaration(statement) || ts.isInterfaceDeclaration(statement) || ts.isEnumDeclaration(statement)) {
        const className = statement.name.text;
        if (className.endsWith('Service')) {
          // サービスクラス
          // console.log(statement);
          const methodDefs = {};
          const methods = statement.members
            .filter(member =>
              ts.canHaveModifiers(member)
              && (!member.modifiers || !member.modifiers.some(modifier => modifier.kind === ts.SyntaxKind.PrivateKeyword))
              && !ts.isConstructorDeclaration(member)
            )
            .map(method => {
              if (ts.isMethodDeclaration(method)) {
                const signatureStart = method.pos + 1; // nameの次の位置
                const signatureEnd = method.body?.pos ?? method.end; // bodyがあればその前の位置、なければ終了位置
                const signature = sourceCode.slice(signatureStart, signatureEnd).trim() + ';';
                return signature;
              } else {
                // console.log(`============================================0000000`);
                // console.log(method.getText(sourceFile));
                // console.log(`============================================1111111`);
                return method.getText(sourceFile);
              }
            });
          const classSourceCode = `export interface ${className} {\n  ${methods.join("\n  ")}\n}`;
          classes[className] = {
            name: className, path: filename, type: 'service',
            src: `// src/app/services/${toKebabCase(className)}.ts\n${tsForm(classSourceCode)}`,
            raw: statement.getText(sourceFile),
          };
        } else {
          // モデルクラス
          const constructor = statement.members.find(member => ts.isConstructorDeclaration(member));
          if (constructor) {
            // コンストラクタのデフォルト値を削除するブロック

            // コンストラクタのパラメータを取得する
            const parameters = constructor.parameters.map(parameter => {
              const typeNode = parameter.type || parameter.initializer && parameter.initializer.type;
              const typeName = typeNode ? typeNode.getText(sourceFile) : 'any';
              return `${parameter.name.getText(sourceFile)}: ${typeName}`;
            });

            // コンストラクタの定義を取得する
            let constructorDefinition = constructor.getText(sourceFile);
            // デフォルト値を削除する
            parameters.forEach(parameter => {
              const parameterRegexp = new RegExp(`${parameter} *=.*?[,)\n]`, 'g');
              constructorDefinition = constructorDefinition.replace(parameterRegexp, `${parameter},`);
            });

            // コンストラクタの定義をクラス全体の定義に差し替えた結果を出力する
            const result = statement.getText(sourceFile).replace(constructor?.getText(sourceFile) || '', constructorDefinition);

            // コンストラクタの定義をconsole.logする
            // console.log(result);
            classes[className] = {
              name: className, path: filename, type: 'model',
              src: tsForm(result.trim()).replace(/\n/g, '')
            };
          } else {
            // コンストラクタが無い場合はそのまま
            // console.log(statement);
            const type = ts.isEnumDeclaration(statement) ? 'enum' : 'model';
            classes[className] = {
              name: className, path: filename, type,
              src: tsForm(statement.getText(sourceFile).trim()).replace(/\n/g, '')
            };
          }
        }
      } else {
        //
      }
    });
    return classes;
  });
  return classes;
}

/**
 * サービスクラスの定義を必要なプロパティだけに絞り込む。
 * @param {*} classSourceCode 
 * @param {*} propList
 * @returns 
 */
function funcFilter(classSourceCode, propList) {
  const sourceFile = ts.createSourceFile("test.ts", classSourceCode, ts.ScriptTarget.Latest);
  return sourceFile.statements.map(statement => {
    const methods = statement.members
      // propListに載っているものだけに絞り込む
      .filter(member => propList.indexOf(member.name.getText(sourceFile)) !== -1)
      // テキスト配列にする
      .map(method => method.getText(sourceFile));
    return `// src/app/services/${toKebabCase(statement.name.text)}.ts\nexport interface ${statement.name.text} {\n  ${methods.join("\n  ")}\n}`;
  }).join('');
}

async function call(stepNo, title, prompt) {
  try { fs.mkdirSync(HISTORY_DIRE, { recursive: true }); } catch (e) { }
  const promise = new Promise(async (resolve, reject) => {
    const messages = [
      { "role": "system", "content": "You are an experienced and talented software engineer." },
      { "role": "user", "content": prompt },
    ];
    let completion = null;
    let retry = 0;
    let bef = Date.now();
    console.log(`${new Date()} start ${title} retry: ${retry}`);
    while (!completion) {
      try {
        completion = await openai.createChatCompletion({
          model: ([0, 1, 4, 5].indexOf(stepNo) !== -1) ? "gpt-4" : "gpt-3.5-turbo",
          // model: "gpt-4",
          temperature: 0.0,
          messages,
        },
          // {
          //   proxy: false,
          //   httpAgent: HttpsProxyAgent('http://172.181.5.32:85'),
          //   httpsAgent: HttpsProxyAgent('http://172.181.5.32:85')
          // }
        );
        console.log(`${new Date()} fine  ${title} retry: ${retry} takes ${Date.now() - bef}ms`);
      } catch (error) {
        console.log(`${new Date()} error ${title} retry: ${retry} takes ${Date.now() - bef}ms ${error}`);
        retry++;
        completion = null;
        await wait(30000);
      }
      if (retry > 3) {
        throw new Error(`${new Date()} error ${title} retry: ${retry} takes ${Date.now() - bef}ms ${error} retryout `);
      }
    }
    const cache = new Set();
    const safe = (key, value) => { if (typeof value === "object" && value !== null) { if (cache.has(value)) { return null; } cache.add(value); } return value; }
    const timestamp = formatDateWithMilliseconds(new Date());
    fs.writeFileSync(`${HISTORY_DIRE}/${timestamp}-${stepNo.toString().padStart(4, '0')}-${title}.json`, JSON.stringify({ messages, completion }, safe), function (err) {
      if (err) throw err;
      // console.log('Data written to file');
    });
    resolve(completion);
  });
  return promise;
}
async function wait(ms) { return new Promise(resolve => setTimeout(resolve, ms)); }

async function step000_requirements_to_componentList() {
  console.log(`step000_requirements_to_componentList`);
  const requirements = fs.readFileSync(`./000-requirements.md`, "utf-8");
  const tail = `# prompt
- As a UI/UX designer, design a list of screens based on a good understanding of the requirements definition.
- Place headers, footers, menus, etc. as appropriate.
- If multiple patterns of design are possible, please select the simplest pattern.
- The list should be reviewed by professionals such as UI/UX designers, security specialists, business analysts, database specialists, strict consistency checker, etc., and an improved version should be presented with their input.(the strict consistency checker checks in detail whether the requirements definition is consistent with the list of screens.)
Only the system overview and the completed list of screens and their components should be output.`;

  const prompt = `${requirements}\n\n${tail}`;
  fs.writeFileSync(`./prompts/000-initial-prompt.md`, prompt);
  const uiList = await call(0, 'RequirementsToComponentList', prompt).then((completion) => {
    const text = completion.data.choices[0].message.content;
    fs.writeFileSync(`./prompts/000-initial-prompt.md.answer.md`, text);
    return text;
  });
  return uiList;
}

async function step001_componentList_to_angularComponentList() {
  console.log(`step001_componentList_to_angularComponentList`);
  const uiList = fs.readFileSync(`./prompts/000-initial-prompt.md.answer.md`, "utf-8");
  // Please familiarize yourself with the functional division by the above list of screens and create a list of Angular components.
  const tail = `# prompt
After familiarizing yourself with the instructions up to this point, list all the Angular components you will need for this system.
- Please use AngularMaterial.
- Please classify the components into page, parts, and dialog.
- If multiple patterns of design are possible, please select the simplest pattern.
- For pages, please set the path.
- Please also clearly indicate the I/O of components such as @Input, @Output, and MAT_DIALOG_DATA(parameter of dialogs). Don't forget to write the type, and generic type.
- The output should be in tabular form, with the component name, type (page, parts, dialog), path (for page only), @Input, @Output, MAT_DIALOG_DATA, Child Angular Components,Dialog Angular Components, HTML Components, describe.
- The component list should be reviewed by professionals such as UI/UX designers, security specialists, business analysts, strict consistency checker,  etc., and an improved version should be presented with their input (strict consistency checkers should strictly check for consistency between the screen list and component list).
Output only the Improved Angular components List(after review).`;

  const prompt = `${uiList}\n\n${tail}`;
  fs.writeFileSync(`./prompts/001-ComponentListToAngularComponentList.prompt.md`, prompt);
  const angularUiList = await call(1, 'ComponentListToAngularComponentList', prompt).then((completion) => {
    const text = completion.data.choices[0].message.content;
    fs.writeFileSync(`./prompts/001-ComponentListToAngularComponentList.prompt.md.answer.md`, text);
    return text;
  });
  return angularUiList;
}

async function step002_angularComponentList_to_angularComponentJson() {
  console.log(`step002_angularComponentList_to_angularComponentJson`);
  const uiList = spaceNormalize(fs.readFileSync(`./prompts/001-ComponentListToAngularComponentList.prompt.md.answer.md`, "utf-8"));
  const tail = `# prompt
Please convert the above design of Angular components to the following format. 
{"\${ComponentName}": {"type": "page, parts, dialog","path":"\${path}","@Input": {{"\${varName}": "\${varType}"},,},"@Output": {{"\${varName}": "EventEmitter<\${genericType}>"},,},"MAT_DIALOG_DATA": {{"\${varName}": "\${varType}"},,},"childAngularComponents":["\${childComponentName}"], "dialogAngularComponents":["\${dialogComponentName}"], "HTMLComponents": ["\${htmlComponentName}}"], "describe":"describe"}}
Be careful to convert all components to JSON correctly.
Note that it is minified JSON without line breaks and spaces.`;
  const prompt = `${uiList}\n\n${tail}`;
  fs.writeFileSync(`./prompts/002-AngularComponentListToAngularComponentJson.prompt.md`, prompt);
  const angularUiJson = await call(2, 'AngularComponentListToAngularComponentJson', prompt).then((completion) => {
    const text = completion.data.choices[0].message.content;
    fs.writeFileSync(`./prompts/002-AngularComponentListToAngularComponentJson.prompt.md.answer.md`, text.replace(/```/g, ''));
    return text;
  });
  return angularUiJson;
}
async function step003_requirements_to_systemOverview() {
  console.log(`step003_requirements_to_systemOverview`);
  const initialPromptPath = `./000-requirements.md`;
  const uiList = fs.readFileSync(initialPromptPath, "utf-8");
  const tail = `# prompt
Please familiarize yourself with the above requirements document and express it in simple sentences as a system overview.`;

  const prompt = `${uiList}\n\n${tail}`;
  fs.writeFileSync(`./prompts/003-RequirementsToSystemOverview.prompt.md`, prompt);
  const angularUiList = await call(3, 'RequirementsToSystemOverview', prompt).then((completion) => {
    const text = completion.data.choices[0].message.content;
    fs.writeFileSync(`./prompts/003-RequirementsToSystemOverview.prompt.md.answer.md`, text);
    return text;
  });
  return angularUiList;
}

async function step004_makeAngularService() {
  console.log(`step004_makeAngularService`);
  const overViewText = fs.readFileSync(`./prompts/003-RequirementsToSystemOverview.prompt.md.answer.md`, "utf-8");
  const uiComponentsText = fs.readFileSync(`./prompts/000-initial-prompt.md.answer.md`, "utf-8");
  const compListText = spaceNormalize(fs.readFileSync(`./prompts/001-ComponentListToAngularComponentList.prompt.md.answer.md`, "utf-8"));
  const tail = `# prompt
After familiarizing yourself with the instructions up to this point, list all the Angular service classes you will need for this system.
- List the method names, arguments, and return values.
- If multiple patterns are possible, choose the simpler design.
- The service list should be reviewed by professionals such as UI/UX designers, security specialists, business analysts, strict consistency checker,  etc., and an improved version should be presented with their input.(The consistency checker will strictly check that your service list reflects all previous requirements.)
Only output the Improved Angular service classes(and method) List.`;

  const prompt = `# System Overview\n${uiComponentsText}\n\n# Angular Components\n${compListText}\n\n${tail}`;
  fs.writeFileSync(`./prompts/004-makeAngularService.prompt.md`, prompt);
  const angularUiJson = await call(4, 'makeAngularService', prompt).then((completion) => {
    const text = completion.data.choices[0].message.content;
    fs.writeFileSync(`./prompts/004-makeAngularService.prompt.md.answer.md`, text.replace(/```/g, ''));
    return text;
  });
  return angularUiJson;
}

async function step005_makeAngularModel() {
  console.log(`step005_makeAngularModel`);
  const compListText = spaceNormalize(fs.readFileSync(`./prompts/001-ComponentListToAngularComponentList.prompt.md.answer.md`, "utf-8"));
  const serviceListText = spaceNormalize(fs.readFileSync(`./prompts/004-makeAngularService.prompt.md.answer.md`, "utf-8"));

  const tail = `# prompt
Design the Model Classes based on the above design document.
- Please include all items that will be needed in addition to those used on the screen.
- Define enums as appropriate.
- The Model Classes should be reviewed by experts such as UI/UX designers, security specialists, business analysts, consistency checkers, etc., and an improved version should be presented that incorporates their input (consistency checkers strictly check whether the Model Classes reflects all previous designs).
Only the list of improved Model classes (tabular format) is output.`;

  const prompt = `${compListText}\n\n${serviceListText}\n\n${tail}`;
  fs.writeFileSync(`./prompts/005-makeAngularModel.prompt.md`, prompt);
  const angularUiJson = await call(5, 'makeAngularModel', prompt).then((completion) => {
    const text = completion.data.choices[0].message.content;
    fs.writeFileSync(`./prompts/005-makeAngularModel.prompt.md.answer.md`, text);
    return text;
  });
  return angularUiJson;
}

async function step006_makeAngularModelSource() {
  console.log(`step006_makeAngularModelSource`);
  // const compListText = fs.readFileSync(`./prompts/001-ComponentListToAngularComponentList.prompt.md.answer.md`, "utf-8");
  // const serviceListText = fs.readFileSync(`./prompts/004-makeAngularService.prompt.md.answer.md`, "utf-8");
  const modelText = fs.readFileSync(`./prompts/005-makeAngularModel.prompt.md.answer.md`, "utf-8");
  const tail = `# prompt
Create model classes in Typescript based on the model class design document above.
Please refer to the following format.
* If you are instructed to create an interface, convert it to a class and output it.
\`\`\`typescript
// ./src/app/models.ts
export class ClassName {
  constructor(
    public name: type = default,
  ){
  }
}\`\`\``;

  const prompt = `${modelText}\n\n${tail}`;
  fs.writeFileSync(`./prompts/006-makeAngularModelSource.prompt.md`, prompt);
  const angularUiJson = await call(6, 'makeAngularModelSource', prompt).then((completion) => {
    const text = completion.data.choices[0].message.content;
    fs.writeFileSync(`./prompts/006-makeAngularModelSource.prompt.md.answer.md`, text);
    fs.writeFileSync(`./src/app/models.ts`, text.replace(/```.*/g, '').trim());
    return text;
  });
  return angularUiJson;
}

async function step007_makeApiList() {
  console.log(`step007_makeApiList`);
  // const compListText = fs.readFileSync(`./prompts/001-ComponentListToAngularComponentList.prompt.md.answer.md`, "utf-8");
  const serviceListText = spaceNormalize(fs.readFileSync(`./prompts/004-makeAngularService.prompt.md.answer.md`, "utf-8"));
  const modelText = fs.readFileSync(`./prompts/005-makeAngularModel.prompt.md.answer.md`, "utf-8");
  const tail = `# prompt
Above is a screen-side design document created assuming Angular.
Based on this design document, please create an appropriate APIs list.
- Please make the API list in a tabular format. The only columns should be "Method", "Path", "RequestBody", and "ResponseBody".
- For login-related APIs, be sure to include a token in the ResponseBody. Even if the token is not specified in the output item of the service class, it must be returned from the API as a hidden item.
- It is not necessary to implement all the methods of the service class. Select functions that should be processed on the server side appropriately and make them into APIs.
- The API list should be reviewed by experts such as UI/UX designers, security specialists, business analysts, and strict consistency checkers, and an improved version should be presented with their input. (Strict consistency checkers will rigorously check that all features that should be implemented on the server are reflected in the API list).
Only output the Improved APIs List.`;

  const prompt = `${modelText}\n\n${serviceListText}\n\n${tail}`;
  fs.writeFileSync(`./prompts/007-makeApiList.prompt.md`, prompt);
  const angularUiJson = await call(7, 'makeApiList', prompt).then((completion) => {
    const text = completion.data.choices[0].message.content;
    fs.writeFileSync(`./prompts/007-makeApiList.prompt.md.answer.md`, text);
    return text;
  });
  return angularUiJson;
}

const g = {};

async function step008_makeAngularServiceJson() {
  console.log(`step008_makeAngularServiceJson`);
  // const compListText = fs.readFileSync(`./prompts/001-ComponentListToAngularComponentList.prompt.md.answer.md`, "utf-8");
  const serviceListText = fs.readFileSync(`./prompts/004-makeAngularService.prompt.md.answer.md`, "utf-8");
  const modelText = fs.readFileSync(`./prompts/005-makeAngularModel.prompt.md.answer.md`, "utf-8");
  const tail = `# prompt
Please convert the above service class list into JSON format.
The format is as follows.
{"ServiceName",{"path":". /src/app/services/service-name.service.ts", "models":["modelClassName"],"methods":[{"name":"methodName","params":[{"name":"type"}],"return":"returnType<genericType>"}]},,,}
Note that it is minified JSON without line breaks and spaces.`;

  const prompt = `${serviceListText}\n\n${tail}`;
  fs.writeFileSync(`./prompts/008-makeAngularServiceJson.prompt.md`, prompt);
  const angularUiJson = await call(8, 'makeAngularServiceJson', prompt).then((completion) => {
    const text = completion.data.choices[0].message.content;
    fs.writeFileSync(`./prompts/008-makeAngularServiceJson.prompt.md.answer.md`, text);
    g.services = JSON.parse(text.replace(/```/g, '').trim());
    return text;
  });
  return angularUiJson;
}


async function step009_makeAngularServiceSrouce() {
  console.log(`step009_makeAngularServiceSrouce`);
  const defs = loadDefs(["./src/app/models.ts"]);
  // const compListText = fs.readFileSync(`./prompts/001-ComponentListToAngularComponentList.prompt.md.answer.md`, "utf-8");
  const serviceListJSON = fs.readFileSync(`./prompts/008-makeAngularServiceJson.prompt.md.answer.md`, "utf-8");
  g.services = JSON.parse(serviceListJSON.replace(/```/g, '').trim());
  const apiList = fs.readFileSync(`./prompts/007-makeApiList.prompt.md.answer.md`, "utf-8");

  fs.mkdirSync(`./src/app/services`, { recursive: true });
  const promiseList = [];
  Object.keys(g.services).forEach((serviceName, index) => {
    const modelsString = g.services[serviceName].models.map(modelName => defs[modelName].src).join('\n');
    // - Authentication tokens for request headers should be get from the service responsible for authService by getToken.
    // - HTTP APIのResponseBody TypeとサービスのReturn Typeの違いには、十分に注意をしてください。ほとんど同じでも若干違うことが多いので、pipe(map())等で調整してください。
    // - HTTP ResponseBody の型にDate型がある場合はStringで連携されるため、pipe(map())等でDate型に変換してください。専用の関数を定義してもよいです。
    const tail = `# prompt
Please create an ${serviceName} as Angular Service class.
Add functions that are not in the service class definition as needed.
step by step:
- import all required libraries.
- Authentication tokens for request headers should be get from the authService.getToken.
- Write all implementations.
- Pay close attention to the difference between the HTTP API's ResponseBody Type and the service's Return Type. Even if they are almost the same, they are often slightly different, so use pipe(map()) or other methods to adjust them.
- ResponseBody is returned as String type even if it is written as Date. As a function of the Service class, it must be converted to the Date type according to the model class type.
Only output the source code.`;
    const prompt = `# Reference\n## All HTTP API List\n${apiList}\n\n## Models\n${modelsString}\n\n# Service Class Name:\n${serviceName}\n\n# Service Class Definition:\n${JSON.stringify(g.services[serviceName])}\n\n${tail}`;
    fs.writeFileSync(`./prompts/009-${index}-makeAngularServiceSrouce.prompt.md`, prompt);
    fs.writeFileSync(`./src/app/services/${toKebabCase(serviceName).replace(/-service/, '.service')}.ts.prompt.md`, prompt);
    const promise = call(9, `${index}-makeAngularServiceSrouce`, prompt).then((completion) => {
      let text = completion.data.choices[0].message.content;
      fs.writeFileSync(`./prompts/009-${index}-makeAngularServiceSrouce.prompt.md.answer.md`, text);
      text = text
        .replace(/```.*/g, '')
        .replace(/\`\`\`typescript[\r]?\n/g, '')
        // .replace(/from '\.\.\/services\/.*'/g, 'from \'./\'')
        .replace(/from '\.\.\/models\/.*'/g, 'from \'../models\'')
        .trim();
      if (text.indexOf(' map(') === -1 || /import { .*map[,]*.*} from 'rxjs';/g.test(text) || /import { .*map[,]*.*} from 'rxjs\/operators';/g.test(text)) {
      } else {
        text = `import { map } from 'rxjs';\n` + text;
      }
      fs.writeFileSync(`./src/app/services/${toKebabCase(serviceName).replace(/-service/, '.service')}.ts`, text);
      return text;
    });
    promiseList.push(promise);
  });

  const res = Promise.all(promiseList).then((values) => {
    console.log(`step009_makeAngularServiceSrouce-fine`);
    genIndex();
  });

  return res;
}

async function step010_ApiListJson() {
  console.log(`step010_ApiListJson`);
  const apiList = fs.readFileSync(`./prompts/007-makeApiList.prompt.md.answer.md`, "utf-8");
  const tail = `# prompt
please conver APIs List table to minified JSON format, like below.
[{ "method": "POST", "path": "/api/auth/login", "requestBody": "{ username: string, password: string }", "responseBody": "{ token: string, user: User }", "description": "Authenticates user and returns a token and user object" }, { "method": "POST", "path": "/api/auth/login", "requestBody": "{ username: string, password: string }", "responseBody": "{ token: string, user: User }", "description": "Authenticates user and returns a token and user object" },]
Output Json only.`;
  const prompt = `# APIs List:\n${apiList}\n\n${tail}`;
  fs.writeFileSync(`./prompts/010-ApiListJson.prompt.md`, prompt);
  const promise = call(10, 'ApiListJson', prompt).then((completion) => {
    const text = completion.data.choices[0].message.content;
    fs.writeFileSync(`./prompts/010-ApiListJson.prompt.md.answer.md`, text);
    return text;
  });
  return promise;
}
async function step010_createJSONdata() {
  console.log(`step010_createJSONdata`);
  const modelList = fs.readFileSync(`./prompts/005-makeAngularModel.prompt.md.answer.md`, "utf-8");
  const apiList = JSON.parse(fs.readFileSync(`./prompts/010-ApiListJson.prompt.md.answer.md`, "utf-8"));
  const promiseList = [];

  // トークン節約と回答途切れ防止のため5個ずつ投げる。
  toChunkArray(apiList, 5).forEach((chunkArray, idx) => {
    const cols = Object.keys(chunkArray[0]);
    const header = cols.join(' | ');
    const border = cols.map(key => '-').join(' | ');
    const bodies = chunkArray.map(obj => cols.map(key => obj[key]).join(' | '));
    const apiListTable = [header, border, ...bodies].map(row => `| ${row} |`).join('\n').replace(/  +/g, '');
    const tail = `# prompt
以上の設計書に基づいてAPIs ListのAPIのサンプルデータ（日本人向け）を作って下さい。ResponseBodyのみでよいです。
Enumは全ての値を使ってください。
形式は以下のminifiedJSONで、1つにまとめてください。
{"\${Method}-\${Path}":\${mockdata}}
JSON形式のデータ以外は出力しないでください。
`;
    const prompt = `# APIs List:\n${apiListTable}\n\n# Models List:\n${modelList}\n\n${tail}`;
    fs.writeFileSync(`./prompts/010-createJSONdata-${idx}.prompt.md`, prompt);
    const promise = call(10, 'createJSONdata', prompt).then((completion) => {
      const text = completion.data.choices[0].message.content;
      fs.writeFileSync(`./prompts/010-createJSONdata-${idx}.prompt.md.answer.md`, text);
      try {
        const all = JSON.parse(text);
        Object.keys(all).forEach(key => {
          let method = key.split('-')[0];
          let path = key.substring(method.length + 1);
          // スラッシュを1つにする、かつ先頭と末尾のスラッシュを外す。
          path = path.replace(/\/\/+/, '/').replace(/^\/|\/$/, '').replace(/[\?=\&]/g, '-');
          let dire = `./src/assets/mock/${path}`.replace(/\/[^\/]*$/g, '');
          // ディレクトリを掘る。
          fs.mkdirSync(dire, { recursive: true });
          fs.writeFileSync(`./src/assets/mock/${path}-${method}.json`, JSON.stringify(all[key], null, 4));
        });
      } catch (e) {
        // DELETEが無かったりすることもあるので無視する。
        console.log(e);
        console.log(method);
        console.log(text);
      }
      return text;
    });
    promiseList.push(promise);
  });
  const res = Promise.all(promiseList).then((values) => {
    console.log(`step010_createJSONdata-fine`);
    // genIndex();
  });
  return res;
}
// async function step010_createJSONdata() {
//   console.log(`step010_createJSONdata`);
//   const defs = loadDefs();
//   const serviceListJSON = fs.readFileSync(`./prompts/008-makeAngularServiceJson.prompt.md.answer.md`, "utf-8");
//   g.services = JSON.parse(serviceListJSON.replace(/```/g, '').trim());
//   // console.log(JSON.stringify(g.services));
//   const ref = Object.keys(defs).map(key => defs[key].src).join('\n');

//   const serviceNameList = Object.keys(defs).filter(key => defs[key].type === 'service');
//   const otherDefsString = Object.keys(defs).filter(key => defs[key].type !== 'service').map(key => defs[key].src).join('\n');
//   const promiseList = [];

//   // console.log(defs);
//   // console.log(Object.keys(defs));
//   serviceNameList.forEach(key => {
//     // console.log(defs[key].name);
//     // 以下のステップでhttp用のモックデータを作成してください。
//     // 1. モデルクラスの定義を確認します。
//     // 2. SettingsService クラスのメソッドごとにhttpリクエストのパスと戻り値の型を確認します。
//     // 3. 戻り値の型に合致する適切なデータを用意します。
//     // 4. 用意したデータを以下のminified JSON形式に変換します。
//     // {{"\${json file name (http full path(without domain))}-\${http method}":\${mock data}}
//     // 5. 作成したJSONが複数ある場合は一つにまとめます。
//     // 6. JSON形式として間違っていないことを確認します。 
//     const tail = `# prompt
// Follow the steps below to create mock data for ${defs[key].name}'s http request.
// - steps
// > 1. check the model class definition.
// > 2. check the http request url and http method and return type for each method of the ${defs[key].name} class.
// > 3. Prepare appropriate data that matches the return type. Data should be for Japanese.
// > 4. Convert the all prepared data to the following minified JSON format.
// >    {{"\${json file name (http url)}-\${http method(get/post/put/delete/fetch)}":\${mock data},{"\${json file name (http url)}-\${http method(get/post/put/delete/fetch)}":\${mock data},,,}
// > 5. Confirm that the url and type is correct.
// > 6. Confirm that the JSON format is correct.
// * Output only the JSON created in 6. Do not output any intermediate steps.
// `;
//     const prompt = `# model classes\n${otherDefsString}\n\n# service class\n${defs[key].raw}\n\n${tail}`;
//     fs.writeFileSync(`./prompts/010-createJSONdata-${defs[key].name}.prompt.md`, prompt);
//     const promise = call(10, 'createJSONdata', prompt).then((completion) => {
//       const text = completion.data.choices[0].message.content;
//       fs.writeFileSync(`./prompts/010-createJSONdata-${defs[key].name}.prompt.md.answer.md`, text);
//       try {
//         let all = {};
//         try {
//           all = JSON.parse(text);
//         } catch (e) {
//           console.log(`${key}---------------------------------`);
//           text.split('\n').forEach(line => {
//             console.log(`${line}`);
//             let json = JSON.parse(line);
//             all = { ...all, ...json };
//           });
//         }
//         Object.keys(all).forEach(key => {
//           // 勝手に.jsonがついてしまうことがあるので外しておく。
//           let path = key.replace(/https?:\/\/[^\/]+/g, '').replace(/^\//g, '').replace(/.json$/g, '').replace(/-([a-zA-Z]+)$/g, (match, p1) => `-${p1.toUpperCase()}`);
//           fs.mkdirSync(`./src/assets/mock/${path}.json`.replace(/\/[^\/]*$/g, ''), { recursive: true });
//           fs.writeFileSync(`./src/assets/mock/${path}.json`, JSON.stringify(all[key], null, 4));
//         });
//       } catch (e) {
//         console.log(e);
//         console.log(defs[key].name);
//         console.log(text);
//       }
//       return text;
//     });
//     promiseList.push(promise);
//   });
//   const res = Promise.all(promiseList).then((values) => {
//     console.log(`step010_createJSONdata-fine`);
//     // genIndex();
//   });
//   return res;
// }

async function step010_componentList_to_Json() {
  console.log(`step010_componentList_to_Json`);
  const uiList = fs.readFileSync(`./prompts/000-initial-prompt.md.answer.md`, "utf-8");
  const tail = `# prompt
Please convert the above List of Screensn into JSON format.
{"ScreenName":{"desc": "A brief description of the screen", "uiList"["UI component",,]},,}
Note that this is minified JSON without newlines and spaces.`;

  const prompt = `${uiList}\n\n${tail}`;
  fs.writeFileSync(`./prompts/010-ComponentListJson.prompt.md`, prompt);
  const angularUiList = await call(10, 'ComponentListJson', prompt).then((completion) => {
    const text = completion.data.choices[0].message.content;
    fs.writeFileSync(`./prompts/010-ComponentListJson.prompt.md.answer.md`, text);
    return text;
  });
  return angularUiList;
}
async function step011_AngularModelList_to_Json() {
  console.log(`step011_AngularModelList_to_Json`);
  const modelList = fs.readFileSync(`./prompts/005-makeAngularModel.prompt.md.answer.md`, "utf-8");
  const tail = `# prompt
Please convert the above List of Screensn into JSON format.
{"ModelClassName":{"desc": "A brief description of the Model", "props"{{"name":"type<generic>"},,}},,}
Note that this is minified JSON without newlines and spaces.`;

  const prompt = `${modelList}\n\n${tail}`;
  fs.writeFileSync(`./prompts/011-AngularModelListToJson.prompt.md`, prompt);
  const angularUiList = await call(11, 'AngularModelListToJson', prompt).then((completion) => {
    const text = completion.data.choices[0].message.content;
    fs.writeFileSync(`./prompts/011-AngularModelListToJson.prompt.md.answer.md`, text);
    try { g.models = JSON.parse(text.replace(/```/g, '').trim()); } catch (e) { }
    return text;
  });
  return angularUiList;
}
async function step012_makeScreenSpec() {
  console.log(`step012_makeScreenSpec`);
  const defs = loadDefs();
  const ngUiList = spaceNormalize(fs.readFileSync(`./prompts/001-ComponentListToAngularComponentList.prompt.md.answer.md`, "utf-8"));
  const ngUiJSON = JSON.parse(fs.readFileSync(`./prompts/002-AngularComponentListToAngularComponentJson.prompt.md.answer.md`, "utf-8"));
  const systemOverview = fs.readFileSync(`./prompts/003-RequirementsToSystemOverview.prompt.md.answer.md`, "utf-8");
  const serviceListJSON = fs.readFileSync(`./prompts/008-makeAngularServiceJson.prompt.md.answer.md`, "utf-8");
  g.services = JSON.parse(serviceListJSON.replace(/```/g, '').trim());
  const serviceString = Object.keys(g.services).map(key => ` - ${key}: ${g.services[key].methods.map(method => method.name + '(' + method.params.map(kv => kv.name + ': ' + kv.type).join(', ') + '): ' + method.return).join(', ')}`).join('\n');
  const modelJSON = fs.readFileSync(`./prompts/011-AngularModelListToJson.prompt.md.answer.md`, "utf-8");
  g.models = JSON.parse(modelJSON.replace(/```/g, '').trim());
  const modelString = Object.keys(g.models).map(key => ` - ${key}(${Object.keys(g.models[key].props).map(propKey => propKey + ': ' + g.models[key].props[propKey]).join(', ')})`).join('\n');
  const promiseList = [];
  Object.keys(ngUiJSON).forEach((componentName, index) => {
    const io = ['@Input', '@Output'].map(io => Object.keys(ngUiJSON[componentName][io] || {}).filter(key => key.trim() !== '-').map(key => `- ${key}: ${ngUiJSON[componentName][io][key]}`).join('\n'));
    const tail = `# prompt
Based on the above design, prepare a detailed screen design document for ${componentName}.
> Please think step-by-step when creating the design document.
> First, carefully read the System Overview to understand the purpose of this system.
> Next, look at the Angular Component List carefully to understand the position of the ${componentName} within the overall system.
> Then, think about the elements and functions you need for the ${componentName}.
> Then select from All Service Classes which service (and model) will be used to provide the required information for the component.
- Do not include information that will be implemented by child components.
The chapter structure should be as follows.
\`\`\`markdown
# Detailed Screen Design Document
## Screen name
## Description
## Child Elements
### Angular element components
${(ngUiJSON[componentName].childAngularComponents || []).map(chilName => '- ' + chilName + '(' + ['@Input', '@Output'].map(io => io + ':{' + Object.keys(ngUiJSON[chilName][io] || {}).filter(key => key.trim() !== '-').map(key => key + ': ' + ngUiJSON[chilName][io][key]).join(',') + '}').join(', ') + ')').join('\n') || 'None'}
### Angular dialog components
${(ngUiJSON[componentName].dialogAngularComponents || []).map(chilName => '- ' + chilName + '(' + ['MAT_DIALOG_DATA'].map(io => io + ':{' + Object.keys(ngUiJSON[chilName][io] || {}).filter(key => key.trim() !== '-').map(key => key + ': ' + ngUiJSON[chilName][io][key]).join(',') + '}').join(', ') + ')').join('\n') || 'None'}
### HTML components
${(ngUiJSON[componentName].HTMLComponents || []).map(name => '- ' + name).join(', ') || 'None'}
## Screen layout
## Screen behavior
## Input Form
## Error messages
## Model classes used (excluding use from child components)
## Service classes and methods used (excluding calls from child components)
\`\`\``;
    const prompt = `# System Overview\n${systemOverview}\n\n# All Angular Components\n${ngUiList}\n\n# All Model Classes\n${modelString}\n\n# All Service Classes\n${serviceString}\n\n${tail}`;
    fs.writeFileSync(`./prompts/012-${index}-makeScreenSpec-${componentName}.prompt.md`, prompt);
    const promise = call(12, `${index}-makeScreenSpec`, prompt).then((completion) => {
      const text = completion.data.choices[0].message.content;
      fs.writeFileSync(`./prompts/012-${index}-makeScreenSpec-${componentName}.prompt.md.answer.md`, text);
      return text;
    });
    promiseList.push(promise);
  });
  const res = Promise.all(promiseList).then((values) => {
    console.log(`step012_makeScreenSpec-fine`);
  });
  return res;
}
async function step013_makeScreenSpecJSON() {
  console.log(`step013_makeScreenSpecJSON`);
  const ngUiList = spaceNormalize(fs.readFileSync(`./prompts/001-ComponentListToAngularComponentList.prompt.md.answer.md`, "utf-8"));
  const ngUiJSON = JSON.parse(fs.readFileSync(`./prompts/002-AngularComponentListToAngularComponentJson.prompt.md.answer.md`, "utf-8"));
  const systemOverview = fs.readFileSync(`./prompts/003-RequirementsToSystemOverview.prompt.md.answer.md`, "utf-8");
  const serviceListJSON = fs.readFileSync(`./prompts/008-makeAngularServiceJson.prompt.md.answer.md`, "utf-8");
  g.services = JSON.parse(serviceListJSON.replace(/```/g, '').trim());
  const serviceString = Object.keys(g.services).map(key => ` - ${key}: ${g.services[key].methods.map(method => method.name).join(', ')}`).join('\n');
  const modelJSON = fs.readFileSync(`./prompts/011-AngularModelListToJson.prompt.md.answer.md`, "utf-8");
  g.models = JSON.parse(modelJSON.replace(/```/g, '').trim());
  const modelString = Object.keys(g.models).join(', ');
  const tail = `# prompt
Please convert the above List of Screensn into JSON format.
{"modelClassesUsed":[\${Model class used}], "serviceClassesUsed":[\${Service class used}]]}
* Models and Services shall be by name only List.
Note that this is minified JSON without newlines and spaces.`;
  const promiseList = [];
  Object.keys(ngUiJSON).forEach((componentName, index) => {
    const doc = fs.readFileSync(`./prompts/012-${index}-makeScreenSpec-${componentName}.prompt.md.answer.md`, "utf-8");
    const prompt = `${doc}\n\n${tail}`;
    fs.writeFileSync(`./prompts/013-${index}-makeScreenSpecJSON-${componentName}.prompt.md`, prompt);
    const promise = call(13, `${index}-makeScreenSpecJSON`, prompt).then((completion) => {
      const text = completion.data.choices[0].message.content;
      fs.writeFileSync(`./prompts/013-${index}-makeScreenSpecJSON-${componentName}.prompt.md.answer.md`, text);
      return text;
    });
    promiseList.push(promise);
  });
  const res = Promise.all(promiseList).then((values) => {
    console.log(`makeScreenSpecJSON-fine`);
  });
  return res;
}

async function step014_makeScreenHtml() {
  console.log(`step014_makeScreenHtml`);
  const ngUiJSON = JSON.parse(fs.readFileSync(`./prompts/002-AngularComponentListToAngularComponentJson.prompt.md.answer.md`, "utf-8"));
  const serviceListJSON = fs.readFileSync(`./prompts/008-makeAngularServiceJson.prompt.md.answer.md`, "utf-8");
  g.services = JSON.parse(serviceListJSON.replace(/```/g, '').trim());
  const modelJSON = fs.readFileSync(`./prompts/011-AngularModelListToJson.prompt.md.answer.md`, "utf-8");
  g.models = JSON.parse(modelJSON.replace(/```/g, '').trim());
  g.classes = loadDefs();
  const promiseList = [];
  Object.keys(ngUiJSON).forEach((componentName, index) => {
    const doc = fs.readFileSync(`./prompts/012-${index}-makeScreenSpec-${componentName}.prompt.md.answer.md`, "utf-8");
    const specJSON = JSON.parse(fs.readFileSync(`./prompts/013-${index}-makeScreenSpecJSON-${componentName}.prompt.md.answer.md`, "utf-8"));
    const nameKebab = toKebabCase(componentName);
    const nameKebab0 = nameKebab.replace(/-component$/, '');
    const nameCamel0 = componentName.replace(/Component$/, '');
    const io = ['@Input', '@Output', 'MAT_DIALOG_DATA'].map(io => Object.keys(ngUiJSON[componentName][io] || {}).filter(key => key.trim() !== '-').map(key => `- ${key}: ${ngUiJSON[componentName][io][key]}`).join('\n'));
    const tail = `
## @Input (as Angular component)
${io[0]}
## @Output (as Angular component)
${io[1]}
## MAT_DIALOG_DATA (as Angular dialog component)
${io[2]}

# Reference

## Model and Service classes
\`\`\`typescript
${Object.keys(g.classes).map(key => g.classes[key].src).join('\n')}
\`\`\`

---
# prompt
Please carefully review the design information up to this point and create the html for the ${componentName}, keeping in mind the division of roles according to the screen list.
Please be sure to inspect the following points before submitting your work.
- Please use AngularMaterial to create a polished design.
- Calibrate the screen with only the given components.
- Do not use name specified for @Output.
- screen should be for Japanese.
- Note the component names (especially the suffixes).
Please respond only to ${nameKebab0}.component.html.`;

    const prompt = `${doc}\n\n${tail}`;

    fs.writeFileSync(`./prompts/014-${index}-makeScreenHtml-${componentName}.prompt.md`, prompt);

    const dire = `./src/app/${ngUiJSON[componentName].type.toLowerCase().replace(/s$/g, '')}s/${nameKebab0}/`;
    if (fs.existsSync(dire)) {
    } else {
      fs.mkdirSync(dire, { recursive: true });
      console.log(`Directory ${dire} created.`);
    }

    fs.writeFileSync(`./${dire}/${nameKebab0}.component.html.prompt.md`, prompt);
    fs.writeFileSync(`./${dire}/${nameKebab0}.component.scss`, '');

    const promise = call(14, `${index}-makeScreenHtml`, prompt).then((completion) => {
      const text = completion.data.choices[0].message.content;
      fs.writeFileSync(`./prompts/014-${index}-makeScreenHtml-${componentName}.prompt.md.answer.md`, text);
      fs.writeFileSync(`./${dire}/${nameKebab0}.component.html`, text
        .replace(/.*```.*\n/, '')
        .replace(/\n```.*/, '')
        .replace('$event.target.value', `$event.target['value']`)
        .replace(/\.controls\.([a-zA-Z0-9_$]*)\./g, `.controls['$1']?.`)
        .replace(/(\.controls[a-zA-Z0-9_$\[\]"']*\.errors)\.([a-zA-Z0-9_$]*)/g, `$1['$2']`));
      return text;
    });
    promiseList.push(promise);
  });
  const res = Promise.all(promiseList).then((values) => {
    console.log(`makeScreenHtml-fine`);
  });
  return res;
}

async function step015_ScreenProp() {
  console.log(`step015_ScreenProp`);
  const ngUiJSON = JSON.parse(fs.readFileSync(`./prompts/002-AngularComponentListToAngularComponentJson.prompt.md.answer.md`, "utf-8"));
  const serviceListJSON = fs.readFileSync(`./prompts/008-makeAngularServiceJson.prompt.md.answer.md`, "utf-8");
  g.services = JSON.parse(serviceListJSON.replace(/```/g, '').trim());
  const modelJSON = fs.readFileSync(`./prompts/011-AngularModelListToJson.prompt.md.answer.md`, "utf-8");
  g.models = JSON.parse(modelJSON.replace(/```/g, '').trim());
  g.classes = loadDefs();
  const promiseList = [];
  Object.keys(ngUiJSON).forEach((componentName, index) => {
    const nameKebab = toKebabCase(componentName);
    const nameKebab0 = nameKebab.replace(/-component$/, '');
    const nameCamel0 = componentName.replace(/Component$/, '');

    const dire = `./src/app/${ngUiJSON[componentName].type.toLowerCase().replace(/s$/g, '')}s/${nameKebab0}/`;

    const htmlString = fs.readFileSync(`./${dire}/${nameKebab0}.component.html`, 'utf-8');
    const tail = `# html
\`\`\`html
${htmlString}
\`\`\`

# prompt
The above html is an Angular template.
Please list all "variables", "constants", "ViewChild", and "functions" needed to create the ts. mat-table's column names are also "constants".
The format should be name, type, description.
`;
    // TODO mat-tableのcolumn名もconstantsに含めるようにする
    const prompt = `${tail}`;

    fs.writeFileSync(`./prompts/015-${index}-ScreenProp-${componentName}.prompt.md`, prompt);
    fs.writeFileSync(`./${dire}/${nameKebab0}.component.prop.prompt.md`, prompt);
    const promise = call(15, `${index}-ScreenProp`, prompt).then((completion) => {
      const text = completion.data.choices[0].message.content;
      fs.writeFileSync(`./prompts/015-${index}-ScreenProp-${componentName}.prompt.md.answer.md`, text);
      fs.writeFileSync(`./${dire}/${nameKebab0}.component.prop`, text);
      return text;
    });
    promiseList.push(promise);
  });
  const res = Promise.all(promiseList).then((values) => {
    console.log(`step015_ScreenProp-fine`);
  });
  return res;
}

async function step016_AngularTypescript() {
  console.log(`step016_AngularTypescript`);
  const ngUiJSON = JSON.parse(fs.readFileSync(`./prompts/002-AngularComponentListToAngularComponentJson.prompt.md.answer.md`, "utf-8"));
  const serviceListJSON = fs.readFileSync(`./prompts/008-makeAngularServiceJson.prompt.md.answer.md`, "utf-8");
  g.services = JSON.parse(serviceListJSON.replace(/```/g, '').trim());
  const modelJSON = fs.readFileSync(`./prompts/011-AngularModelListToJson.prompt.md.answer.md`, "utf-8");
  g.models = JSON.parse(modelJSON.replace(/```/g, '').trim());
  g.classes = loadDefs();
  const promiseList = [];
  Object.keys(ngUiJSON).forEach((componentName, index) => {
    const doc = fs.readFileSync(`./prompts/012-${index}-makeScreenSpec-${componentName}.prompt.md.answer.md`, "utf-8")
      .split('\n').map(line => {
        if (line.match(/^#+/)) {
          return `#${line}`;
        } else {
          return line;
        }
      }).join('\n');
    const specJSON = JSON.parse(fs.readFileSync(`./prompts/013-${index}-makeScreenSpecJSON-${componentName}.prompt.md.answer.md`, "utf-8"));
    const nameKebab = toKebabCase(componentName);
    const nameKebab0 = nameKebab.replace(/-component$/, '');
    const nameCamel0 = componentName.replace(/Component$/, '');

    const dire = `./src/app/${ngUiJSON[componentName].type.toLowerCase().replace(/s$/g, '')}s/${nameKebab0}/`;

    let htmlProps = fs.readFileSync(`./${dire}/${nameKebab0}.component.prop`, 'utf-8')
      .split('\n').map((line) => {
        if (line.match(/^[A-Za-z0-9].*:$/)) {
          return `### ${line}`;
        } else {
          return line;
        }
      }).join('\n');
    let ioString = '';
    for (const io of ['@Input', '@Output']) {
      for (const key of Object.keys(ngUiJSON[componentName][io] || {})) {
        ioString += `    ${io}() ${key}: ${ngUiJSON[componentName][io][key]};\n`;
      }
      // for (const obj of ngUiJSON[componentName][io]) {
      //     const key = Object.keys(obj)[0];
      //     ioString += `    ${io}() ${key}: ${obj[key]};\n`;
      // }
    }

    // TODO Angular Elementsに書かれてるからChilは不要では？
    let chilString = '';
    // if (ngUiJSON[componentName].childAngularComponents.length > 0) {
    //   chilString += `\n * \n * Child Components:`;
    //   ngUiJSON[componentName].childAngularComponents.forEach((child) => {
    //     chilString += `\n * - ${child}`;
    //   });
    // } else { }

    console.log(specJSON);
    // console.log(componentName);
    // console.log(g.classes.src);
    // console.log(`${(specJSON.modelClassUsed || specJSON.modelClassesUsed).map(name => name).join('\n').trim()}`);
    let diString = (specJSON.serviceClassUsed || specJSON.serviceClassesUsed).map((s) => `private ${decapitalize(s)}: ${s}`).join(', ');


    const io = ['@Input', '@Output', 'MAT_DIALOG_DATA'].map(io => Object.keys(ngUiJSON[componentName][io] || {}).filter(key => key.trim() !== '-').map(key => `- ${key}: ${ngUiJSON[componentName][io][key]}`).join('\n'));
    const tail = `# Reference
## Model and Service classes
\`\`\`typescript
${Object.keys(g.classes).map(key => g.classes[key].src).join('\n')}
\`\`\`
    
## Directory structure sample
src/app/dialogs/sample-dialog.component/
src/app/pages/sample-page.component/
src/app/parts/sample-part.component/
src/app/services/sample.service.ts
src/app/models.ts

# ${componentName}
${doc}
### @Input (as Angular component)
${io[0]}
### @Output (as Angular component)
${io[1]}
### MAT_DIALOG_DATA (as Angular dialog component)
${io[2]}
${htmlProps}
${chilString}

## typescript template
\`\`\`typescript
// src/app/${ngUiJSON[componentName].type.toLowerCase().replace(/s$/g, '')}s/${nameKebab0}.component.ts
import { Component, OnInit } from '@angular/core';
import { ${(specJSON.modelClassUsed || specJSON.modelClassesUsed).join(', ')} } from '../../models';
import { ${(specJSON.serviceClassUsed || specJSON.serviceClassesUsed).join(', ')} } from '../../services';

@Component({
    selector: 'app-${nameKebab0}',
    templateUrl: './${nameKebab0}.component.html',
    styleUrls: ['./${nameKebab0}.component.scss']
})
export class ${nameCamel0}Component implements OnInit {

${ioString}
    constructor(${diString}) {
    }

    ngOnInit(): void {
    }
}
\`\`\`
---
# prompt
Please carefully review the design information up to this point and add any missing features to COMPONENT.
Be sure to inspect the following points yourself before submitting.
- Please use AngularMaterial to create a polished design.
- Pay attention to the types and variable names (especially the difference between camel case and snake case).
- The argument and return type of the service class name must be correct.
- The @Input and @Output specifications are often forgotten. Please do not forget to check them.
- screen should be for Japanese.
- Replace all TODOs with implementation.
- Import statements and DI statements will be inspected.
Please write ${nameKebab0}.component.ts, as no explanation is needed.
`;
    // - MatDialog can handle both components and templates.
    const prompt = `${tail}`;

    fs.writeFileSync(`./prompts/016-${index}-AngularTypescript-${componentName}.prompt.md`, prompt);
    fs.writeFileSync(`./${dire}/${nameKebab0}.component.ts.prompt.md`, prompt);
    const promise = call(16, `${index}-AngularTypescript`, prompt).then((completion) => {
      let text = completion.data.choices[0].message.content;
      fs.writeFileSync(`./prompts/016-${index}-AngularTypescript-${componentName}.prompt.md.answer.md`, text);
      text = convertCodeBlocks(text)
        .replace(/from '\.\.\/services\/.*'/g, 'from \'../../services\'')
        .replace(/from '\.\.\/services'/g, 'from \'../../services\'')
        .replace(/from '\.\.\/models\/.*'/g, 'from \'../../models\'')
        .replace(/from '\.\.\/models'/g, 'from \'../../models\'')
        .replace(/from '\.\.\/\.\.\/services\/.*'/g, 'from \'../../services\'')
        .replace(/from '\.\.\/\.\.\/models\/.*'/g, 'from \'../models\'')
        .replace(/from '\.\.\/dialogs\//g, 'from \'../../dialogs/')
        .replace(/from '\.\.\/pages\//g, 'from \'../../pages/')
        .replace(/from '\.\.\/parts\//g, 'from \'../../parts/')
        .replace('$event.target.value', `$event.target['value']`)
        .replace(/\.controls\.([a-zA-Z0-9_$]*)\./g, `.controls['$1']?.`)
        .replace(/(\.controls[a-zA-Z0-9_$\[\]"']*\.errors)\.([a-zA-Z0-9_$]*)/g, `$1['$2']`)
        // fine TODO component.componentの揺れを直す。-> 一応直ったと思う。
        // fine TODO outputとイベントの二重定義 -> 一応html作るときに@Outputは消すようにしてる。
        // TODO @InputとVariablesの二重定義
        // TODO categoryサービスちゃんと呼ばれない問題が起きてる。->丁寧に書くと解決する。
        // TODO CommonDialog系はあった方が良さそう。Success/Error/Message/Confirm
        // fine TODO enum対応した方がいい。-> 一応対応したと思う。
        // fine TODO form.controls['name'].valueの対応はtsにも掛ける。-> 一応対応したと思う。
        // TODO 複数コンポーネントのファイルもあるので、モジュール作るときにパースしないとダメかも。
        // TODO 組み合わせ（customerとか）が苦手
        // TODO serviceのDateはstringになってるので、Dateにする。（結構大変？）
        // TODO グラフは結構変。
        // TODO dialogの渡し方、オブジェクトそのものを渡しているのにidで受け取ってると勘違いしてる。
        .trim();
      fs.writeFileSync(`./${dire}/${nameKebab0}.component.ts`, text);
      return text;
    });
    promiseList.push(promise);
  });
  const res = Promise.all(promiseList).then((values) => {
    console.log(`step016_AngularTypescript-fine`);
    makeModule();
  });
  return res;
}

async function main() {
  try { fs.mkdirSync(`./prompts`, { recursive: true }); } catch (e) { }
  try { fs.mkdirSync(`${HISTORY_DIRE}`, { recursive: true }); } catch (e) { }
  // await step000_requirements_to_componentList();
  // await step001_componentList_to_angularComponentList();
  // await step002_angularComponentList_to_angularComponentJson();
  // await step003_requirements_to_systemOverview();
  // await step004_makeAngularService();
  // await step005_makeAngularModel();
  // await step006_makeAngularModelSource();
  // await step011_AngularModelList_to_Json();
  // await step007_makeApiList();
  // await step008_makeAngularServiceJson();
  await step009_makeAngularServiceSrouce();

  // await step010_ApiListJson();
  // await step010_createJSONdata();

  // await step010_componentList_to_Json();
  // await step012_makeScreenSpec();
  // await step013_makeScreenSpecJSON();
  // await step014_makeScreenHtml();
  // await step015_ScreenProp();
  // await step016_AngularTypescript();
}
main();



//---------------------------------画面一覧作成時のおまじない？
// - AngularMaterialで作成する前提でUIコンポーネント分割を考えること。
// - メインページとダイアログ画面を分けて考えること。
// - ヘッダー、フッター、メニュー、ダイアログを有効利用すること。
// - 編集画面と追加画面はワンセットにすべき。
// - 複数パターンの設計が考えられる場合は、画面分割が少なくなるパターンを選択すること。
// ステップバイステップで考えて、1つの表形式にまとめてください。
// 列は「部品名」、「分類」、「利用サービス.メソッド」としてください。列の定義は以下の通りです。
// - 部品名：Angularのコンポーネント名
// - 分類：ルーティング定義を持つものをpage、ダイアログで利用するものをdialog、それ以外をpartとしてください。
// - 利用サービス.メソッド：利用サービス.メソッド
// - 子コンポーネント：このコンポーネントの中で使うコンポーネント
// - input：Angularの@Inputで使えるプロパティ
// - output：Angularの@Outputで使えるプロパティ

