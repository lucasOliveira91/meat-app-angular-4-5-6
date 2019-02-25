import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { MenuItem } from "../menu-item/menu-item.model";
import { CartItem } from "./cart-item.model";

@Injectable()
export class ShoppingCartService {

    items: CartItem[] = [];

    constructor(http: Http){}

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
            itemFound.quantity = itemFound.quantity + 1;
        } else {
            this.items.push(new CartItem(item));
        }
    }

    removeItem(item: CartItem) {
        this.items.splice(this.items.indexOf(item), 1);
    }
}