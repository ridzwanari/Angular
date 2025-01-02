import { Component, EventEmitter, Output } from '@angular/core';
import { Recipe } from './recipe.model';
import { CommonModule } from '@angular/common';
import { RecipeItemComponent } from './recipe-item/recipe-item.component';

@Component({
  selector: 'app-recipe-list',
  standalone: true,
  imports: [CommonModule,RecipeItemComponent],
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css'
})
export class RecipeListComponent {
@Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipes:Recipe[] = [
    
    new Recipe ('A Test Recipe','This is simply a test','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHZW6JHTEaFO2vwrYE6AthqGBrrZrZ3k8tVA&s'),
    
    new Recipe ('A REAL Recipe','This is ur a test','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1J5aCNxcaR25lpEhqneb-sksK4OXQOaw8Fg&s')
  ];

  constructor(){}

  onRecipeSelected(recipe:Recipe)

  {
     
    this.recipeWasSelected.emit(recipe);

  }


}
