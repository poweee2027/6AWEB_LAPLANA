import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-custom-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './custom-form.html',
  styleUrl: './custom-form.css'
})
export class CustomFormComponent {
  trainerForm: FormGroup;
  isSubmitted = false;

  constructor(private fb: FormBuilder) {
    // IMPORTANT: These names must match the formControlName in your HTML exactly
    this.trainerForm = this.fb.group({
      trainerName: ['', [Validators.required, Validators.minLength(3)]],
      trainerEmail: ['', [Validators.required, Validators.email]],
      starterPokemon: ['', Validators.required],
      gender: ['', Validators.required], // Ensure this matches HTML
      region: ['', Validators.required],
      trainerNotes: [''] // Mission Log
    });
  }

  isValid(field: string): boolean {
    const control = this.trainerForm.get(field);
    return !!(control && control.valid && (control.dirty || control.touched));
  }

  onSubmit() {
    if (this.trainerForm.valid) {
      this.isSubmitted = true;
      console.log('Form Submitted!', this.trainerForm.value);
    }
  }
}
