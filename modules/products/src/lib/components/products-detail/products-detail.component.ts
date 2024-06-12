import { Component } from '@angular/core';
import { GeneralModule, PrimeNgModule } from '@simple/shared-ui';

@Component({
  selector: 'lib-products-detail',
  standalone: true,
  imports: [GeneralModule, PrimeNgModule],
  templateUrl: './products-detail.component.html',
  styleUrl: './products-detail.component.css',
})
export class ProductsDetailComponent {}
