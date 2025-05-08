import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms'; // Import NgForm

// Angular Material imports
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { NgIf } from '@angular/common';


@Component({
  selector: 'app-login',
  imports: [
    NgIf,
    FormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})

export class LoginComponent {
  username = '';
  password = '';

  onSubmit(form: NgForm) {  // Add NgForm parameter
    if (form.valid) { // Check if the form is valid
      console.log('Username:', this.username);
      console.log('Password:', this.password);

      // Here you would typically make an API call to your authentication service
      // to verify the username and password.

      // Example of resetting the form after successful submission (optional):
      form.resetForm();
      this.username = '';
      this.password = '';

      // Navigate to another page (after successful login)
      // this.router.navigate(['/dashboard']); // Example, inject Router
    }
  }
}
