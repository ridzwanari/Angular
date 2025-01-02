import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

import { Ingredient } from '../../shared/Ingredient.model';
@Component({
  selector: 'app-shopping-edit',
  standalone: true,
  imports: [],
  templateUrl: './shopping-edit.component.html',
  styleUrl: './shopping-edit.component.css'
})
export class ShoppingEditComponent {
  
  @ViewChild('nameInput') nameInputRef!:ElementRef ;
  @ViewChild('amountInput') amountInputRef!:ElementRef ;
  @Output() ingredientAdded =new EventEmitter<Ingredient>();


  onAddItem() {
    if (this.nameInputRef && this.amountInputRef) {
      const ingName = this.nameInputRef.nativeElement.value;
      const ingAmount = this.amountInputRef.nativeElement.value;
      const newIngredient = new Ingredient(ingName, ingAmount);
      this.ingredientAdded.emit(newIngredient);
    } else {
      console.error('Input references are not defined!');
    }
  }
  

}
