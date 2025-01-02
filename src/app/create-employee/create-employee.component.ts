import { Component } from '@angular/core';
import { Employee } from '../employee';
import { FormsModule } from '@angular/forms';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-create-employee',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent {
  employee: Employee = new Employee(); // Initialize with default values
  isSubmitting: boolean = false; // Track submission status
  successMessage: string = '';
  errorMessage: string = '';

  constructor(private employeeService: EmployeeService, private router: Router) {}

  // Method to save employee
  saveEmployee() {
    this.isSubmitting = true; // Set submission flag to true
    this.employeeService.createEmployee(this.employee).subscribe(
      (data) => {
        console.log(data);
        this.successMessage = 'Employee created successfully!';
        this.errorMessage = '';
        this.isSubmitting = false;
        setTimeout(() => {
          this.router.navigate(['/employees']); // Navigate to employee list
        }, 2000); // Show success message for 2 seconds
        // this.employee = new Employee(); // Reset the form after success
        // Uncomment if you want to navigate after creation
        // this.goToEmployeeList(); 
      },
      (error) => {
        console.error(error);
        this.errorMessage = 'There was an error while creating the employee.';
        this.successMessage = '';
        this.isSubmitting = false;
      }
    );
  }


  // Method to navigate to employee list
  goToEmployeeList() {
    this.router.navigate(['/employees']);
  }

  // On form submit, call saveEmployee method
  onSubmit() {
    console.log('Form submitted', this.employee); // Debugging log
    this.saveEmployee();
  }
}
