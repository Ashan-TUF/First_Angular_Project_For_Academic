import { Component } from '@angular/core';
import {SearchBarTemplateComponent} from "../search-bar-template/search-bar-template.component";

@Component({
  selector: 'app-service',
  standalone: true,
    imports: [
        SearchBarTemplateComponent
    ],
  templateUrl: './service.component.html',
  styleUrl: './service.component.scss'
})
export class ServiceComponent {
searchText:string='';
setSearchText(value:any):void{
  this.searchText=value;
}
}
