import {Component, inject} from '@angular/core';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {TokenManagerService} from "../../services/token-manager.service";
import {ActivatedRoute, Router} from "@angular/router";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    FormsModule,
    NgIf,
    ReactiveFormsModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  tokenManagerService = inject(TokenManagerService);
  router = inject(Router);
  activatedRoute = inject(ActivatedRoute);
  newToken: any = '';

  setToken() {
    this.tokenManagerService.setToken('access_token', this.newToken);
    console.log(this.activatedRoute.url);
    this.router.navigateByUrl('/dashboard');
  }

  form = new FormGroup({
    name:new FormControl('',[Validators.required,Validators.maxLength(20)]),
    address:new FormControl(''),
    salary:new FormControl(''),
    age:new FormControl(''),
  })

  submitData(){
    console.log(this.form.value.name);
    console.log(this.form.get('address'));
    console.log(this.form);
  }
}
