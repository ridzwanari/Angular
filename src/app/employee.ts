export class Employee {
  public id?: number; // Optional, as id may not be provided initially
  public firstName: string = ''; // Default empty string
  public lastName: string = ''; // Default empty string
  public emailId: string = ''; // Default empty string

  constructor(
    id?: number,
    firstName: string = '',
    lastName: string = '',
    emailId: string = ''
  ) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.emailId = emailId;
  }

//   getFullName(): string {
//     return `${this.firstName} ${this.lastName}`;
//   }
}
