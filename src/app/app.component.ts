import {Component} from '@angular/core';
import {RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';
import {NgIf} from "@angular/common";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, NgIf, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  isActive: boolean = false;
  fonsSize: string = '50px';

  changeFontSize(): void {
    this.fonsSize = '20px';
  }

  customerName: string = '';

  printData(value: any): void {
    console.log(value);
    this.customerName = value;
  }
  state:boolean=true;
  hideShow():void{
    this.state=false;
  }
}
