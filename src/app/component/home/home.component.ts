import {Component} from '@angular/core';
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
  customers: any[] = [
    {
      id: 'COO1',
      name: 'Ranil Kumara',
      salary: 25000,
      avatar: 'https://cdndailyexcelsior.b-cdn.net/wp-content/uploads/2022/07/Ranil-Wickremesinghe.jpg'
    },
    {
      id: 'COO1',
      name: 'Mahinda samantha',
      salary: 25000,
      avatar: 'https://images.livemint.com/rf/Image-621x414/LiveMint/Period2/2017/12/06/Photos/Processed/rajapaksa-kJNB--621x414@LiveMint.jpg'
    },
    {
      id: 'COO1',
      name: 'Namal',
      salary: 25000,
      avatar: 'https://cloudfront-us-east-2.images.arcpublishing.com/reuters/C6PZIGPCQRMP7C4PZKYD3TQWVI.jpg'
    },
    {
      id: 'COO1',
      name: 'Marvin silva',
      salary: 25000,
      avatar: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgkuW2S-wtd0jqUBEI8NL-CELnu4F1fPQSiOgMEgOeEihr7AknfyY0l7bScCY3Wwp2OwhSzlS4PqSDYiAWqRFCLmiT7-kRA0VTy34FSnA80YlNtoKoaW8ORtuFw_ip5XgdKmhGmSQFs_ZP7/s1600/mer0.jpg'
    },
    {
      id: 'COO1',
      name: 'anura Kumara',
      salary: 25000,
      avatar: 'https://upload.wikimedia.org/wikipedia/commons/6/63/President_of_Sri_Lanka_Mr._Anura_Kumara_Dissanayake_in_India.jpg'
    }
  ];
}
