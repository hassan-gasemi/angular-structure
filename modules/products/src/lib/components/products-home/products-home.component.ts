import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GSpinnerComponent } from '@simple/shared-ui';

@Component({
  selector: 'lib-products-home',
  standalone: true,
  imports: [CommonModule, GSpinnerComponent],
  templateUrl: './products-home.component.html',
  styleUrl: './products-home.component.css',
})
export class ProductsHomeComponent {}
