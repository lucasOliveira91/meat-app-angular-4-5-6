import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { OrderComponent } from "./order.component";

export class LeaveOrderGuard implements CanDeactivate<OrderComponent>{

    canDeactivate(orderComponent:OrderComponent,
         currentRoute: ActivatedRouteSnapshot, 
         state: RouterStateSnapshot): boolean {

        if(!orderComponent.isOrderCompleted()) {
            return window.confirm('Do you want give up this order?');
        }else {
            return true;
        }
    }
}