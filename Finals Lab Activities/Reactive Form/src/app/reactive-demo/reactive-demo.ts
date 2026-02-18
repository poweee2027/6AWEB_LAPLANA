import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-demo',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './reactive-demo.html',  // Matches your file name
  styleUrl: './reactive-demo.css'       // Matches your file name
})
export class ReactiveDemoComponent {
  form: FormGroup;
  isSubmitted = false;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      // Validators are defined here in the TS file for Reactive Forms
      username: ['', [Validators.required, Validators.pattern(/^[a-zA-Z0-9]+$/)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      role: ['', Validators.required],
      gender: ['', Validators.required],
      status: ['', Validators.required],
      comments: ['']
    });
  }

  // Helper to keep HTML clean. Returns true if valid & touched.
  isValid(field: string): boolean {
    const control = this.form.get(field);
    return !!(control && control.valid && (control.dirty || control.touched));
  }

  onSubmit() {
    if (this.form.valid) {
      this.isSubmitted = true;
      console.log('Reactive Form Data:', this.form.value);
    } else {
      // If invalid, mark all fields as touched so error styles appear
      this.form.markAllAsTouched();
    }
  }
}
