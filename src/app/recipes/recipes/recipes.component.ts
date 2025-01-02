import { Component } from '@angular/core';
import { RecipeDetailComponent } from '../recipe-detail/recipe-detail.component';
import { RecipeListComponent } from '../recipe-list/recipe-list.component';
import { Recipe } from '../recipe-list/recipe.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-recipes',
  standalone: true,
  imports: [CommonModule,RecipeDetailComponent,RecipeListComponent],
  templateUrl: './recipes.component.html',
  styleUrl: './recipes.component.css'
})
export class RecipesComponent {

  selectedRecipe?: Recipe;

}
