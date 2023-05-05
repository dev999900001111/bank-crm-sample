// src/app/parts/referral-form.component.ts
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDatepicker } from '@angular/material/datepicker';
import { Referral, ReferralStatus } from '../../models';
import { ReferenceService } from '../../services';

@Component({
  selector: 'app-referral-form',
  templateUrl: './referral-form.component.html',
  styleUrls: ['./referral-form.component.scss']
})
export class ReferralFormComponent implements OnInit {

  @Input() referral: Referral;
  @Output() referralChange: EventEmitter<Referral> = new EventEmitter<Referral>();

  referralStatuses: ReferralStatus[] = Object.values(ReferralStatus);

  constructor(private referenceService: ReferenceService) { }

  ngOnInit(): void {
  }

  saveReferral(): void {
    if (this.referralForm.valid) {
      if (this.referral) {
        this.referenceService.updateReferral(this.referral).subscribe((updatedReferral: Referral) => {
          this.referralChange.emit(updatedReferral);
        });
      } else {
        this.referenceService.createReferral(this.referral).subscribe((newReferral: Referral) => {
          this.referralChange.emit(newReferral);
        });
      }
    }
  }

  cancelReferral(): void {
    this.referralChange.emit(null);
  }

  get referralDateErrorMessage(): string {
    if (this.referralForm.controls['referralDate'].hasError('required')) {
      return 'Referral date is required';
    }
    if (this.referralForm.controls['referralDate'].hasError('matDatepickerParse')) {
      return 'Invalid referral date';
    }
    return '';
  }

  get referralStatusErrorMessage(): string {
    if (this.referralForm.controls['status'].hasError('required')) {
      return 'Referral status is required';
    }
    return '';
  }

  get notesErrorMessage(): string {
    if (this.referralForm.controls['notes'].hasError('maxlength')) {
      return 'Notes cannot be longer than 500 characters';
    }
    return '';
  }

  // @ViewChild('picker') picker: MatDatepicker<Date>;

  referralForm: NgForm;

}