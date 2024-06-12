import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimeNgModule } from '../../primeng.module';

@Component({
  selector: 'lib-layout-base',
  standalone: true,
  imports: [CommonModule, PrimeNgModule],
  template: '',
  styleUrl: './layout-base.component.css',
})
export class LayoutBaseComponent {}
