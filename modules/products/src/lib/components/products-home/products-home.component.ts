import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GSpinnerComponent, PrimeNgModule } from '@simple/shared-ui';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'lib-products-home',
  standalone: true,
  imports: [CommonModule, GSpinnerComponent, PrimeNgModule, RouterModule],
  templateUrl: './products-home.component.html',
  styleUrl: './products-home.component.css',
})
export class ProductsHomeComponent {}
