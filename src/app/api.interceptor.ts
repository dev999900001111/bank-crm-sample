import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable()
export class ApiInterceptor implements HttpInterceptor {
    constructor() { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let url = request.url.replace(/https?:\/\/[^/]+/g, '').replace('//', '/').replace(/^\//g, '');
        let method = request.method;
        let headers = request.headers;
        console.log(`${method} ${url}`);
        // 開発環境の場合はローカルのjsonファイルに向ける
        if ((!environment.production && false) && url.startsWith('api/')) {
            url = `assets/mock/${url}-${request.method}.json`;
            headers = headers.delete('Authorization');
            method = 'GET';
        } else {
            // 本番環境の場合は環境変数で指定したAPIのエンドポイントに向ける
            url = `${''}/${url}`;
        }
        request = request.clone({ url, method, headers });
        return next.handle(request);
    }
}
