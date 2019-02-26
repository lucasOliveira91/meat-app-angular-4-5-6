import { Component, OnInit } from '@angular/core';
import { RadioOption } from '../shared/radio/radio-option.model';

@Component({
  selector: 'mt-order',
  templateUrl: './order.component.html'
})
export class OrderComponent implements OnInit {

  paymentOptions: RadioOption[] = [
    {label: 'Money', value: 'MON'},
    {label: 'Credit Card', value: 'DEB'},
    {label: 'Ticket Food', value: 'REF'}
  ]

  constructor() { }

  ngOnInit() {

  }

}
