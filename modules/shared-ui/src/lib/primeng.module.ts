/*
 * Description: This module just import the necessary PrimeNG modules
 * and intended to be used in UI components
 */

import { NgModule } from "@angular/core";
import { ButtonModule } from 'primeng/button';
import { DataViewModule } from 'primeng/dataview';
import { TagModule } from 'primeng/tag';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { MenubarModule } from 'primeng/menubar';


const MODULES = [
    ButtonModule,
    DataViewModule,
    TagModule,
    InputGroupModule,
    InputGroupAddonModule,
    MenubarModule
]
@NgModule ( {
    imports: [...MODULES],
    exports: [...MODULES]
})
export class PrimeNgModule {

}