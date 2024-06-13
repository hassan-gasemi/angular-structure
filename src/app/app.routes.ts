import { Route } from '@angular/router';
import { HomeComponent as HomeComponent } from './home-component/home.component';

export const appRoutes: Route[] = [
    { path: "", component: HomeComponent },
    { path: "products", loadChildren: () => import("@simple/products").then(r => r.productsRoutes) },
    { path: "orders", loadChildren: () => import("@simple/orders").then(r => r.ordersRoutes) }
];
