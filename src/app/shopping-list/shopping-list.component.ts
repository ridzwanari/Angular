import { Component } from '@angular/core';
import { Ingredient } from '../shared/Ingredient.model';
import { ShoppingEditComponent } from './shopping-edit/shopping-edit.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-shopping-list',
  standalone: true,
  imports: [CommonModule, ShoppingEditComponent],
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent {
  ingredients: Ingredient[] = [ // Changed to lowercase "ingredients"
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10),
  ];

  onIngredientAdded(ingredient: Ingredient) {
    this.ingredients.push(ingredient); // Lowercase "ingredients"
  }
}
