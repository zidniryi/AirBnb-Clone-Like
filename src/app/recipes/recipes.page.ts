import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.page.html',
  styleUrls: ['./recipes.page.scss'],
})
export class RecipesPage implements OnInit {
  recipes: Array<Recipe> = [
    {
      id: 'r1',
      title: 'Saffron Rice',
      imageUrl:
        // eslint-disable-next-line max-len
        'https://asset.kompas.com/crops/fQVOtLSPe9n2ymE8jOG6fNCf0xQ=/0x0:1000x667/750x500/data/photo/2021/10/21/6170ffb140316.jpg',
      ingridients: ['rice', 'saffron', 'chicken'],
    },
    {
      id: 'r2',
      title: 'Spaghetti',
      imageUrl:
        // eslint-disable-next-line max-len
        'https://cdn.medcom.id/dynamic/content/2016/08/20/571823/ST3eIAmLz5.jpg?w=480',
      ingridients: ['mie', 'saffron', 'chicken'],
    },
  ];

  constructor() {}

  ngOnInit() {}
}
