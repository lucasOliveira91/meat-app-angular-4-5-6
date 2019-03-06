import { NgModule, ModuleWithProviders } from "@angular/core";
import { InputComponent } from "./input/input.component";
import { RadioComponent } from "./radio/radio.component";
import { RatingComponent } from "./rating/rating.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { OrderService } from "../order/order.service";
import { ShoppingCartService } from "../restaurant-detail/shopping-cart/shopping-cart.service";
import { RestaurantsService } from "../restaurants/restaurants.service";
import { SnackbarComponent } from "./messages/snackbar/snackbar.component";
import { NotificarionService } from "./messages/notiication.service";
import { LoginService } from "../security/login/login.service";
import { AuthGuard } from "../security/auth.guard";
import { LeaveOrderGuard } from "../order/leave-order.guard";
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { AuthInterceptor } from "../security/auth.interceptor";

@NgModule({
    declarations: [
        InputComponent,
        RadioComponent,
        RatingComponent,
        SnackbarComponent
    ],
    imports: [
        FormsModule,
        ReactiveFormsModule,
        CommonModule
    ],
    exports: [
        InputComponent,
        RadioComponent,
        RatingComponent,  
        FormsModule,
        ReactiveFormsModule,
        CommonModule,
        SnackbarComponent
    ]
})
export class SharedModule{
    static forRoot() : ModuleWithProviders {
        return {
            ngModule: SharedModule,
            providers: [
                OrderService,
                ShoppingCartService,
                RestaurantsService,
                NotificarionService,
                LoginService,
                AuthGuard,
                LeaveOrderGuard,
                {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}
            ]
        }
    }
}