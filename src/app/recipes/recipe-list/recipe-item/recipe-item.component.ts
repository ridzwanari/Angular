import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RecipeListComponent } from '../recipe-list.component';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-item',
  standalone: true,
  imports: [CommonModule, RecipeListComponent],
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css'],
})
export class RecipeItemComponent {
  @Input() recipe!: Recipe;

  @Output() recipeSelected = new EventEmitter<void>();

  onSelected() {
    this.recipeSelected.emit();
  }
}
