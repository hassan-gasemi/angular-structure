import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GeneralModule } from '../../general.module';
import { PrimeNgModule } from '../../primeng.module';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'lib-layout-menu',
  standalone: true,
  imports: [GeneralModule, PrimeNgModule],
  templateUrl: './layout-menu.component.html',
  styleUrl: './layout-menu.component.css',
})
export class LayoutMenuComponent implements OnInit {
  items: MenuItem[] | undefined;

  ngOnInit() {
    this.items = [
      {
        label: 'Home',
        icon: 'pi pi-home',
        url: ''
      },
      {
        label: 'Modules',
        icon: 'pi pi-search',
        items: [
          {
            label: 'Products',
            icon: 'pi pi-bolt',
            shortcut: '⌘+S',
            url: '/products'
          },
          {
            label: 'Orders',
            icon: 'pi pi-server',
            shortcut: '⌘+B',
            url: '/orders'
          },
          {
            label: 'Auth',
            icon: 'pi pi-pencil',
            shortcut: '⌘+U',
            url: '/auth'
          }
        ]
      }
    ];
  }
}
