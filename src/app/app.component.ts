import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { Recipe } from './recipes/recipe-list/recipe.model';
import { RecipesComponent } from './recipes/recipes/recipes.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app.routes';
import { RouterModule } from '@angular/router';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true, // Enables standalone mode
  imports: [CommonModule,HeaderComponent,EmployeeListComponent,RecipesComponent,ShoppingListComponent,HttpClientModule,RouterModule,CreateEmployeeComponent,FormsModule], // Import CommonModule to use ngIf and other directives
})

export class AppComponent {
  name = 'my-first-app';
  username = ''; // Bound to ngModel in the template
  selectedFeature: string = 'recipe'; // Define the property for template binding

  loadedFeature: string = ''; // Tracks the active feature
  debugMessage: string = ''; // Debug message displayed on the UI

  /**
   * Navigate to a selected feature.
   * @param feature - The feature to navigate to.
   */
  onNavigate(feature: string): void {
    this.loadedFeature = feature;
    this.debugMessage = `Navigated to: ${feature}`;
    console.log('Navigated to:', feature); // Logs the navigation
  }
  /**
   * Handle feature selection with event prevention.
   * @param feature - The feature to navigate to.
   * @param event - The event to prevent default behavior.
   */
  // onSelect(feature: string, event?: Event): void {
  //   if (event) {
  //     event.preventDefault(); // Prevent default behavior of the anchor tag
  //   }
  //   this.loadedFeature = feature;
  //   console.log(`Navigated to: ${feature}`);
  // }

}
