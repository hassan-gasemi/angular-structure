import { Route } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';

export const appRoutes: Route[] = [
    { path: "", component: NxWelcomeComponent },
    { path: "products", loadChildren: () => import("@simple/products").then(r => r.productsRoutes) }
];
