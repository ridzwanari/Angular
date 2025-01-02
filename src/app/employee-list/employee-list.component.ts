import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'employee-list',
  standalone: true,
  imports: [CommonModule, HttpClientModule,RouterModule],
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
   
  employees: Employee[] = []; // Correct type declaration
  successMessage: string ="";
  router: any;

  constructor(private employeeService: EmployeeService) {}

  ngOnInit(): void {
    this.getEmployees(); // Call to fetch employee data
  }

  private getEmployees(): void {
    this.employeeService.getEmployeesList().subscribe(
      (data) => {
        this.employees = data; // Assign the response data to the employees array
      },
      (error) => {
        console.error('Error fetching employee data:', error); // Handle errors if any
      }
    );
  }


  // Delete an employee by ID
  onDelete(id: number): void {
    if (confirm('Are you sure you want to delete this employee?')) {
      this.employeeService.deleteEmployee(id).subscribe(
        () => {
          this.successMessage = 'Employee deleted successfully!';
          setTimeout(() => {
            this.router.navigate(['/employees']); // Navigate to employee list
          }, 2000); // Show success message for 2 seconds
        },
        (error) => {
          console.error('Error deleting employee:', error);
          alert('Failed to delete the employee. Please try again.');
        }
      );
    }
  }

}
  
