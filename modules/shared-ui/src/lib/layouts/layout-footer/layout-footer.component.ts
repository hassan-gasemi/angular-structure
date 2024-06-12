import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimeNgModule } from '../../primeng.module';

@Component({
  selector: 'lib-layout-footer',
  standalone: true,
  imports: [CommonModule, PrimeNgModule],
  templateUrl: './layout-footer.component.html',
  styleUrl: './layout-footer.component.css',
})
export class LayoutFooterComponent {}
