import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, RouterLink} from "@angular/router";
import {TodosService} from "../../../../../../services/todos.service";
import {NgForOf, NgIf} from "@angular/common";
import {CustomerListComponent} from "../customer-list/customer-list.component";

@Component({
  selector: 'app-customer-details',
  standalone: true,
  imports: [
    NgForOf,
    RouterLink,
    NgIf,
    CustomerListComponent
  ],
  templateUrl: './customer-details.component.html',
  styleUrl: './customer-details.component.scss'
})
export class CustomerDetailsComponent implements OnInit {
  //customerId:string = '';
  customerId:any = undefined;
  selectedCustomer:any = undefined;

  constructor(private _activatedRoute: ActivatedRoute, private _todoService:TodosService) {
  }

  ngOnInit(): void {
    //this.customerId = this._activatedRoute.snapshot.params["id"];
    this._activatedRoute.paramMap.subscribe(resp=>{
      //this.customerId  = resp.get('id')!;
      this.customerId  = resp.get('id');
      this.loadCustomerDetails();
    })

  }

  loadCustomerDetails(){
    this._todoService.getTodoData(this.customerId).subscribe(response=>{
      this.selectedCustomer=response;
      window.scrollTo(0,0);
    })
  }

}
