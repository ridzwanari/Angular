import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

// Components
import { AppComponent } from './app.component';
import { ServerComponent } from './server/server/server.component';
import { SuccessAlertComponent } from './success-alert/success-alert/success-alert.component';
import { WarningAlertComponent } from './warning-alert/warning-alert/warning-alert.component';
import { HeaderComponent } from './header/header.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipeItemComponent } from './recipes/recipe-list/recipe-item/recipe-item.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipesComponent } from './recipes/recipes/recipes.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';

// Services
import { EmployeeService } from './employee.service';
import { AppRoutingModule, routes } from './app.routes';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { RouterModule } from '@angular/router';

@NgModule({

 
  declarations: [
    AppComponent,
    ServerComponent,
    SuccessAlertComponent,
    WarningAlertComponent,
    HeaderComponent,
    RecipeListComponent,
    RecipeItemComponent,
    ShoppingListComponent,
    RecipesComponent,
    RecipeDetailComponent,
    EmployeeListComponent,
    CreateEmployeeComponent,
   
    
  ],
  imports: [
     BrowserModule,
     FormsModule,
     CommonModule,
     HttpClientModule,
     AppRoutingModule,
     RouterModule
     
    
  ],
  providers: [
    EmployeeService,
    
   
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent],
  
  
})
export class AppModule {}
