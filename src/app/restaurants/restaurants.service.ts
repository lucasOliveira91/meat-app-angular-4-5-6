import { MenuItem } from './../restaurant-detail/menu-item/menu-item.model';
import { MEAT_API } from './../app.api';
import { Injectable } from "@angular/core";
import { Restaurant } from "./restaurant/restaurant.model";
import { Http } from "@angular/http";
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { ErrorHandler } from '../app.error.handler';

@Injectable()
export class RestaurantsService {

    constructor(private http: Http) { }

    restaurants(): Observable<Restaurant[]> {
        return this.http.get(`${MEAT_API}/restaurants`)
            .map(res => res.json())
            .catch(ErrorHandler.handleError);
    }

    restaurantById(id: string): Observable<Restaurant> {
        return this.http.get(`${MEAT_API}/restaurants/${id}`)
            .map(res => res.json())
            .catch(ErrorHandler.handleError);
    }

    reviews(id: string): Observable<any> {
        return this.http.get(`${MEAT_API}/restaurants/${id}/reviews`)
            .map(res => res.json())
            .catch(ErrorHandler.handleError);
    }

    items(id: string): Observable<MenuItem[]> {
        return this.http.get(`${MEAT_API}/restaurants/${id}/menu`)
            .map(res => res.json())
            .catch(ErrorHandler.handleError);
    }
}