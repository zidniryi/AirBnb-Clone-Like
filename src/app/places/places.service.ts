import { Injectable } from '@angular/core';
import { PlaceModel } from './place.model';

@Injectable({
  providedIn: 'root',
})
export class PlacesService {
  constructor() {}

  // eslint-disable-next-line @typescript-eslint/member-ordering
  private _places: Array<PlaceModel> = [
    new PlaceModel(
      'p1',
      'Manhattan Mansion',
      'In the heart of New York City',
      'https://lh5.googleusercontent.com/-XdUIqdMkCWA/AAAAAAAAAAI/AAAAAAAAAAA/4252rscbv5M/photo.jpg',
      149.99
    ),
    new PlaceModel(
      'p2',
      'Manhattan Mansion',
      'In the heart of New York City',
      'https://lh5.googleusercontent.com/-XdUIqdMkCWA/AAAAAAAAAAI/AAAAAAAAAAA/4252rscbv5M/photo.jpg',
      149.99
    ),
  ];

  get places() {
    // eslint-disable-next-line no-underscore-dangle
    return [...this._places];
  }
}
