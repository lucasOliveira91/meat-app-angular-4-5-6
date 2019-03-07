import { Component, OnInit } from '@angular/core';
import { Restaurant } from './restaurant/restaurant.model';
import { RestaurantsService } from './restaurants.service';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { from } from 'rxjs';
import {tap, switchMap, debounceTime, distinctUntilChanged, catchError} from 'rxjs/operators';
import { CATCH_ERROR_VAR } from '@angular/compiler/src/output/abstract_emitter';

@Component({
  selector: 'mt-restaurants',
  templateUrl: './restaurants.component.html',
  animations: [
    trigger('toggleSearch', [
      state('hidden', style({
        opacity: 0,
        'max-height' : '0px'
      })),
      state('visible', style({
        opacity: 1,
        'max-height' : '70px',
        'margin-top' : '20px'
      })),
      transition('* => *', animate('250ms 0s ease-in-out'))

    ])
  ]
})
export class RestaurantsComponent implements OnInit {

  searchbarState = 'hidden';
  restaurants: Restaurant[] = [];

  searchForm: FormGroup;
  searchControl: FormControl;

  constructor(
    private restaurantsService: RestaurantsService,
    private fb: FormBuilder
  ) { }

  ngOnInit() {

      this.searchControl = this.fb.control('');
      this.searchForm = this.fb.group({
        searchControl: this.searchControl
      });

      this.searchControl.valueChanges.pipe(
        debounceTime(500),
        distinctUntilChanged(),
        switchMap(searchTerm =>  this.restaurantsService.restaurants(searchTerm).pipe(catchError(error => from([]) )))
      ).subscribe(res => this.restaurants = res);

       this.restaurantsService.restaurants().subscribe(res => {
         this.restaurants = res;
       });
  }

  toggleSearch() {
    this.searchbarState = this.searchbarState === 'hidden' ? 'visible' : 'hidden';
  }

}
