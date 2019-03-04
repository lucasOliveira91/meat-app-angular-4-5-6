import { Injectable } from "@angular/core";
import { MenuItem } from "../menu-item/menu-item.model";
import { CartItem } from "./cart-item.model";
import { NotificarionService } from "../../shared/messages/notiication.service";

@Injectable()
export class ShoppingCartService {

    items: CartItem[] = [];

    constructor(
       private notificationService: NotificarionService
    ){}

    clear() {
        this.items = [];
    }

    total(): number {
        return this.items
        .map(item => item.value())
        .reduce((prev,value) => prev + value, 0);
    }

    addItem(item: MenuItem) {
        let itemFound = this.items.find(mItem => mItem.menuItem.id === item.id);

        if(itemFound){
            this.increaseQty(itemFound);
        } else {
            this.items.push(new CartItem(item));
        }

        this.notificationService.notify(`Your added a item ${item.name}`);
    }

    removeItem(item: CartItem) {
        this.items.splice(this.items.indexOf(item), 1);
        this.notificationService.notify(`Your removed a item ${item.menuItem.name}`);
    }

    increaseQty(item: CartItem) {
        item.quantity = item.quantity + 1;
    }

    decreaseQty(item: CartItem) {
        item.quantity = item.quantity - 1;

        if(item.quantity === 0) {
            this.removeItem(item);
        }
    }
}