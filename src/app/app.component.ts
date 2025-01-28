import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
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
}
