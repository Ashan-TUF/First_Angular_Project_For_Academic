import {Component, Input} from '@angular/core';
import {CurrencyPipe, NgForOf} from "@angular/common";

@Component({
  selector: 'app-customer-template',
  standalone: true,
  imports: [
    CurrencyPipe,
    NgForOf
  ],
  templateUrl: './customer-template.component.html',
  styleUrl: './customer-template.component.scss'
})
export class CustomerTemplateComponent {
  @Input() customer: any;
}
