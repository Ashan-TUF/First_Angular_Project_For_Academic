import {Component, OnInit} from '@angular/core';
import {ReactiveFormsModule} from "@angular/forms";
import {CurrencyPipe, DatePipe, JsonPipe, SlicePipe, UpperCasePipe} from "@angular/common";
import {SubstringPipe} from "../../pipes/SubstringPipe";


@Component({
  selector: 'app-about',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    UpperCasePipe,
    DatePipe,
    CurrencyPipe,
    SlicePipe,
    JsonPipe,
    SubstringPipe
  ],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent implements OnInit {
  text='Hi Team, this an Angular Session!';
  date= new Date();
  salary=12345.45;
  name='Kamal Silva';
  student='Artha';
  user={name:'Kamal', age:50}
  ngOnInit(): void {

  }
}
