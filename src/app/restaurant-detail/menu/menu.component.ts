import { ActivatedRoute } from '@angular/router';
import { MenuItem } from './../menu-item/menu-item.model';
import { Observable } from 'rxjs';
import { RestaurantsService } from './../../restaurants/restaurants.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mt-menu',
  templateUrl: './menu.component.html'
})
export class MenuComponent implements OnInit {

  menu: Observable<MenuItem[]>;

  constructor(
    private restaurantsService: RestaurantsService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.menu = this.restaurantsService.items(this.route.parent.snapshot.params['id']);
  }
}
