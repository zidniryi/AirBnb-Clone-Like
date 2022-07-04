import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root',
})
export class RecipesService {
  private recipes: Array<Recipe> = [
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

  getAllRecipes() {
    return [...this.recipes];
  }

  getRecipe(recipeId: string) {
    return { ...this.recipes.find((recipe) => recipe.id === recipeId) };
  }

  deleteRecipe(recipeId: string) {
    this.recipes = this.recipes.filter((recipe) => recipe.id !== recipeId);
  }
}
