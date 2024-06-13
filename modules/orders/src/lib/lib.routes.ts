import { Route } from '@angular/router';
import { LayoutComponent } from '@simple/shared-ui';
import { OrdersListComponent } from './components/orders-list/orders-list.component';

export const ordersRoutes: Route[] = [
    {
        path: '', component: LayoutComponent, children: [
            { path: '', component: OrdersListComponent  }
        ]
    }
];
