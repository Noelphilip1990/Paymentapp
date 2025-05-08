import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatFormFieldModule} from '@angular/material/form-field';
import { NgIf } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-payment',
  imports: [
        MatButtonModule,
        NgIf,
        MatInputModule,
        MatIconModule,
        ReactiveFormsModule,
        MatCardModule,
        MatFormFieldModule,
        MatProgressSpinnerModule,
        MatSlideToggleModule,
        FormsModule
  ],
  templateUrl: './payment.component.html',
  styleUrl: './payment.component.css'
})
export class PaymentComponent {
  paymentForm!: FormGroup;
  loading = false; // For showing a spinner

  constructor(private fb: FormBuilder, private snackBar: MatSnackBar) {
    this.paymentForm = this.fb.group({
      cardNumber: ['', [Validators.required, Validators.pattern('^[0-9]{16}$')]], // Example validation
      expiryMonth: ['', [Validators.required, Validators.pattern('^[0-9]{2}$')]],
      expiryYear: ['', [Validators.required, Validators.pattern('^[0-9]{2}$')]],
      cvv: ['', [Validators.required, Validators.pattern('^[0-9]{3}$')]],
      nameOnCard: ['', Validators.required]
    });
  }

  pay() {
    if (this.paymentForm.valid) {
      this.loading = true; // Show spinner
      // Simulate payment processing (REPLACE with actual gateway integration)
      setTimeout(() => {
        this.loading = false; // Hide spinner
        this.snackBar.open('Payment Successful!', 'Close', { duration: 3000 });
        this.paymentForm.reset(); // Clear the form
      }, 2000); // Simulate a 2-second delay

    } else {
      this.snackBar.open('Please fill in all required fields correctly.', 'Close', { duration: 3000 });
    }
  }

  getErrorMessage(controlName: string) {
    const control = this.paymentForm.get(controlName);
    if (control?.hasError('required')) {
      return 'You must enter a value';
    }
    if (control?.hasError('pattern')) {
      return 'Not a valid format'; // Customize error messages
    }
    return ''; // Other potential errors
  }
}
