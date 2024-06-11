import { NgModule } from "@angular/core";
import { ButtonModule } from 'primeng/button';
import { DataViewModule } from 'primeng/dataview';
import { TagModule } from 'primeng/tag';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';


const MODULES = [
    ButtonModule,
    DataViewModule,
    TagModule,
    InputGroupModule,
    InputGroupAddonModule
]
@NgModule ( {
    imports: [...MODULES],
    exports: [...MODULES]
})
export class PrimeNgModule {

}