import { Component, Input } from '@angular/core';
import { Recipe } from '../recipe-list/recipe.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-recipe-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './recipe-detail.component.html',
  styleUrl: './recipe-detail.component.css'
})
export class RecipeDetailComponent {

@Input() recipe?:Recipe;
  
}
