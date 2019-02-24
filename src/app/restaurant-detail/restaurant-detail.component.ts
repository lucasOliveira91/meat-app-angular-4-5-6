import { Restaurant } from './../restaurants/restaurant/restaurant.model';
import { RestaurantsService } from './../restaurants/restaurants.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'mt-restaurant-detail',
  templateUrl: './restaurant-detail.component.html'
})
export class RestaurantDetailComponent implements OnInit {

  restaurant: Restaurant;

  constructor(
    private restaurantsService: RestaurantsService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    //snapshot, where the param does not change
    this.restaurantsService.restaurantById(this.route.snapshot.params['id']).subscribe(resp => {
      this.restaurant = resp;
    });
  }

}
