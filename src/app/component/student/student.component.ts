import {Component} from "@angular/core";
import {HightlightDirective} from "./directive/HightlightDirective";
import {NgSwitch, NgSwitchCase, NgSwitchDefault} from "@angular/common";

@Component({
  selector: 'app-student',
  template: `
    <h1 appHightlight="appHightlight">Hi My Name is : {{ myName }}</h1>
    <div [ngSwitch]="color">
      <p *ngSwitchCase="'red'">Red Color</p>
      <p *ngSwitchCase="'black'">Black Color</p>
      <p *ngSwitchCase="'blue'">Blue Color</p>
      <p *ngSwitchDefault>Wrong Color</p>
    </div>
  `,
  styles: [`h1 {
    color: red;
  }`],
  imports: [
    HightlightDirective,
    NgSwitch,
    NgSwitchCase,
    NgSwitchDefault
  ],
  standalone: true
})
export class StudentComponent {
  myName = 'Ashan Kavindu';
  color = 'black';
}
