import { Component } from '@angular/core';
import { GeneralModule, PrimeNgModule } from '@simple/shared-ui';

@Component({
  selector: 'lib-products-create',
  standalone: true,
  imports: [GeneralModule, PrimeNgModule],
  templateUrl: './products-create.component.html',
  styleUrl: './products-create.component.css',
})
export class ProductsCreateComponent {}
