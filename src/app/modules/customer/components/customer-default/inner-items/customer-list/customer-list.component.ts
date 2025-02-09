import {Component, OnInit} from '@angular/core';
import {TodosService} from "../../../../../../services/todos.service";
import {NgForOf} from "@angular/common";
import {Router, RouterLink} from "@angular/router";

@Component({
  selector: 'app-customer-list',
  standalone: true,
  imports: [
    NgForOf,
    RouterLink
  ],
  templateUrl: './customer-list.component.html',
  styleUrl: './customer-list.component.scss'
})
export class CustomerListComponent implements OnInit {

  todos:any[]=[];

  constructor(private _todosService: TodosService, private _router: Router) {
  }

  ngOnInit(): void {
    this.loadAllData();
  }

  loadAllData() {
    this._todosService.getAllTodos().subscribe({
      next:(data)=>this.todos=data,
      error:(err)=>console.log(err),
      complete:()=>console.log('Completed!')
    })
  }

  loadPage(id:any){
    //this._router.navigateByUrl('/customer/default-customer/details/'+id);
    //this._router.navigate(['/customer/default-customer/details/'+id]);
  }

}
