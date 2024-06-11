import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimeNgModule } from '@simple/shared-ui';

@Component({
  selector: 'lib-products-create',
  standalone: true,
  imports: [CommonModule, PrimeNgModule],
  templateUrl: './products-create.component.html',
  styleUrl: './products-create.component.css',
})
export class ProductsCreateComponent {}
