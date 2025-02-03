import {Routes} from '@angular/router';
import {ContactComponent} from "./component/contact/contact.component";
import {HomeComponent} from "./component/home/home.component";
import {AboutComponent} from "./component/about/about.component";
import {ServiceComponent} from "./component/service/service.component";
import {NotFoundComponent} from "./component/not-found/not-found.component";

export const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'about', component: AboutComponent},
  {path: 'service', component: ServiceComponent},
  {path: '**', component: NotFoundComponent}
];
