import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root', // Ensures a singleton instance is created
})
export class EmployeeService {
  private readonly baseURL = "http://localhost:8080/api/v1"; // Base URL for API endpoints

  constructor(private httpClient: HttpClient) {}

  /**
   * Fetch the list of employees from the backend API.
   * 
   * @returns Observable<Employee[]> - An observable containing the list of employees.
   */
  getEmployeesList(): Observable<Employee[]> {
    return this.httpClient.get<Employee[]>(`${this.baseURL}/employees`).pipe(
      catchError(this.handleError) // Centralized error handling
    );
  }

  /**
   * Create a new employee.
   * 
   * @param employee - The employee data to create.
   * @returns Observable<Employee> - An observable containing the created employee data.
   */
  createEmployee(employee: Employee): Observable<Employee> {
    return this.httpClient.post<Employee>(`${this.baseURL}/employees/create`, employee).pipe(
      catchError(this.handleError) // Centralized error handling
    );
  }

  /**
   * Get employee by ID.
   * 
   * @param id - The ID of the employee to retrieve.
   * @returns Observable<Employee> - An observable containing the employee data.
   */
  getEmployeeById(id: string): Observable<Employee> {
    return this.httpClient.get<Employee>(`${this.baseURL}/employees/${id}`).pipe(
      catchError(this.handleError) // Centralized error handling
    );
  }

  /**
   * Update an employee by ID.
   * 
   * @param employeeId - The ID of the employee to update.
   * @param employeeData - The new data for the employee.
   * @returns Observable<Employee> - An observable containing the updated employee data.
   */
  updateEmployee(employeeId: number, employeeData: Employee): Observable<Employee> {
    const url = `${this.baseURL}/employees/${employeeId}`;
    return this.httpClient.put<Employee>(url, employeeData).pipe(
      catchError(this.handleError) // Centralized error handling
    );
  }

  deleteEmployee(id: number): Observable<void> {
    return this.httpClient.delete<void>(`${this.baseURL}/employees/${id}`, { responseType: 'text' as 'json' });
  }
  

  
  

  /**
   * Centralized error handling for HTTP requests.
   * 
   * @param error - The error object received from the HttpClient.
   * @returns Observable<never> - Emits an error to the observer.
   */
  private handleError(error: any): Observable<never> {
    console.error('An error occurred:', error); // Log the error for debugging purposes
    return throwError(() => new Error('Failed to process the request. Please try again later.'));
  }
}
