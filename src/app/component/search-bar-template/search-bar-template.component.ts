import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-search-bar-template',
  standalone: true,
  imports: [],
  templateUrl: './search-bar-template.component.html',
  styleUrl: './search-bar-template.component.scss'
})
export class SearchBarTemplateComponent {
  @Output() searchEmitter: EventEmitter<any> = new EventEmitter<any>();

  search(value: any): void {
    this.searchEmitter.emit(value);
  }
}
