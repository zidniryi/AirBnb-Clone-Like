import { Component, OnInit } from '@angular/core';
import { PlaceModel } from '../place.model';
import { PlacesService } from '../places.service';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.page.html',
  styleUrls: ['./offers.page.scss'],
})
export class OffersPage implements OnInit {
  offers: PlaceModel[];

  constructor(private placeServices: PlacesService) {}

  ngOnInit() {
    this.offers = this.placeServices.places;
  }
}
