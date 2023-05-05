// src/app/parts/customer-form.component.ts
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Customer } from '../../models';
import { CustomerService } from '../../services';

@Component({
    selector: 'app-customer-form',
    templateUrl: './customer-form.component.html',
    styleUrls: ['./customer-form.component.scss']
})
export class CustomerFormComponent implements OnInit {

    @Input() customer: Customer = {} as Customer;
    @Output() customerChange: EventEmitter<Customer> = new EventEmitter<Customer>();

    constructor(private customerService: CustomerService) {
    }

    ngOnInit(): void {
    }

    onSubmit(customerForm: NgForm): void {
        if (customerForm.valid) {
            if (this.customer) {
                this.customerService.updateCustomer(this.customer).subscribe((updatedCustomer: Customer) => {
                    this.customer = updatedCustomer;
                    this.customerChange.emit(updatedCustomer);
                });
            } else {
                this.customerService.createCustomer(customerForm.value).subscribe((newCustomer: Customer) => {
                    this.customer = newCustomer;
                    this.customerChange.emit(newCustomer);
                });
            }
        }
    }
}