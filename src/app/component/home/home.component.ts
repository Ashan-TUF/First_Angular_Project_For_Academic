import { Component } from '@angular/core';
import {CurrencyPipe, NgForOf} from "@angular/common";
import {CustomerTemplateComponent} from "../customer-template/customer-template.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    NgForOf,
    CurrencyPipe,
    CustomerTemplateComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  customers:any[]=[
    {
      id:'C001',
      name:'Sajith Premadsa',
      salary:60000,
      avatar:'https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcSM-9n_0pE6Ky6FziTCalbIp4gEvj7My6nI0wRvmqFnMaKSwsi50QmHBPuzQBDuFgoi0lOAtVwYZIb-6RM'
    },
    {
      id:'C002',
      name:'Ranil Kumara',
      salary:45000,
      avatar:'https://nexttravelsrilanka.com/wp-content/uploads/2023/02/Ranil-Wickremesinghe.jpg'
    },
    {
      id:'C003',
      name:'Mahinda Samatha',
      salary:75000,
      avatar:'https://bsmedia.business-standard.com/_media/bs/img/about-page/thumb/464_464/1649933026.jpg'
    },
    {
      id:'C004',
      name:'gamaini dessanayake',
      salary:60000,
      avatar:'https://island.lk/wp-content/uploads/2020/10/gamini.jpg'
    },
    {
      id:'C005',
      name:'Naml Gunathilaka',
      salary:65000,
      avatar:'https://bmkltsly13vb.compat.objectstorage.ap-mumbai-1.oraclecloud.com/cdn.ft.lk/assets/uploads/image_e5860c3eea.jpg'
    },
  ];
}
