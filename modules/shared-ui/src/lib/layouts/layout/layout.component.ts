import { Component } from '@angular/core';
import { GeneralModule } from '../../general.module';
import { LayoutFooterComponent } from "../layout-footer/layout-footer.component";
import { LayoutHeaderComponent } from "../layout-header/layout-header.component";

@Component({
    selector: 'lib-layout',
    standalone: true,
    templateUrl: './layout.component.html',
    styleUrl: './layout.component.css',
    imports: [GeneralModule, LayoutHeaderComponent, LayoutFooterComponent]
})
export class LayoutComponent {}
