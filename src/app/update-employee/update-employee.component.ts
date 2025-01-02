import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from '../employee.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'update',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css'],
  imports: [FormsModule, CommonModule],
  standalone: true,
})
export class UpdateEmployeeComponent implements OnInit {
  employee: any = {};
  successMessage: string = ''; // Variable for success message
  errorMessage: string = ''; // Variable for error message

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private employeeService: EmployeeService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.employeeService.getEmployeeById(id).subscribe(
        data => {
          this.employee = data;
        },
        error => {
          console.error(error);
        }
      );
    }
  }
  //Update employee
  onSubmit(): void {
    this.employeeService.updateEmployee(this.employee.id, this.employee).subscribe(
      () => {
        this.successMessage = 'Employee updated successfully!'; // Set the success message
        setTimeout(() => {
          this.router.navigate(['/employees']); // Redirect after 2 seconds
        }, 2000); // Timeout to show the message before redirect
      },
      (error) => {
        this.successMessage = ''; // Clear the message if update fails
      }
    );
  }

  // Delete employee
  onDelete(id: number): void {
    if (confirm('Are you sure you want to delete this employee?')) {
      this.employeeService.deleteEmployee(id).subscribe(
        response => {
          alert('Employee deleted successfully!');
          this.router.navigate(['/employees']); // Redirect to employee list after deletion
        },
        error => {
          console.error(error);
          alert('An error occurred while deleting the employee.');
        }
      );
    }
  }

}
