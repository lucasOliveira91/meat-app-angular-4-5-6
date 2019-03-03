import { NgModule, ModuleWithProviders } from "@angular/core";
import { InputComponent } from "./input/input.component";
import { RadioComponent } from "./radio/radio.component";
import { RatingComponent } from "./rating/rating.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { OrderService } from "../order/order.service";
import { ShoppingCartService } from "../restaurant-detail/shopping-cart/shopping-cart.service";
import { RestaurantsService } from "../restaurants/restaurants.service";

@NgModule({
    declarations: [
        InputComponent,
        RadioComponent,
        RatingComponent
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
        CommonModule
    ]
})
export class SharedModule{
    static forRoot() : ModuleWithProviders {
        return {
            ngModule: SharedModule,
            providers: [
                OrderService,
                ShoppingCartService,
                RestaurantsService
            ]
        }
    }
}