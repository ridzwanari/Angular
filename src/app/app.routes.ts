import { RouterModule, Routes } from '@angular/router';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { Component, NgModule } from '@angular/core';
import { Call } from '@angular/compiler';
import { CommonModule } from '@angular/common';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipesComponent } from './recipes/recipes/recipes.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';




export const routes: Routes = [

    { path: 'recipes', component: RecipesComponent },
    { path: 'shopping', component: ShoppingListComponent },
    { path: 'employees', component: EmployeeListComponent },
    { path: 'create', component: CreateEmployeeComponent },
    { path: 'update-employee/:id', component: UpdateEmployeeComponent },
    { path: '', redirectTo: '/employees', pathMatch: 'full' }, // Default route

     
];



NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]

})


export class AppRoutingModule{}