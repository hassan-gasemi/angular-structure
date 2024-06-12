import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutMenuComponent } from "../layout-menu/layout-menu.component";

@Component({
    selector: 'lib-layout-header',
    standalone: true,
    templateUrl: './layout-header.component.html',
    styleUrl: './layout-header.component.css',
    imports: [CommonModule, LayoutMenuComponent]
})
export class LayoutHeaderComponent {}
