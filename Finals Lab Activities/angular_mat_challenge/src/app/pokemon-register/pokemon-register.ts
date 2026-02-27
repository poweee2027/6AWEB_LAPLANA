import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ReactiveFormsModule, FormsModule,
  FormGroup, FormControl, Validators,
  AbstractControl, ValidationErrors
} from '@angular/forms';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatStepperModule } from '@angular/material/stepper';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatChipsModule } from '@angular/material/chips';
import { MatDividerModule } from '@angular/material/divider';

function alphanumericStartsWithLetter(control: AbstractControl): ValidationErrors | null {
  const value = control.value;
  if (!value) return null;
  const pattern = /^[a-zA-Z][a-zA-Z0-9]{7,}$/;
  return pattern.test(value) ? null : { passwordInvalid: true };
}

function bornBefore2007(control: AbstractControl): ValidationErrors | null {
  const value = control.value;
  if (!value) return null;
  return new Date(value).getFullYear() > 2006 ? { tooYoung: true } : null;
}

@Component({
  selector: 'app-pokemon-register',
  standalone: true,
  imports: [
    CommonModule, ReactiveFormsModule, FormsModule,
    MatFormFieldModule, MatInputModule, MatButtonModule,
    MatIconModule, MatCardModule, MatSelectModule,
    MatRadioModule, MatDatepickerModule, MatNativeDateModule,
    MatCheckboxModule, MatSlideToggleModule, MatStepperModule,
    MatTooltipModule, MatChipsModule, MatDividerModule,
  ],
  templateUrl: './pokemon-register.html',
  styleUrls: ['./pokemon-register.css'],
})
export class PokemonRegisterComponent {

  darkMode = false;
  submitted = false;
  showPassword = false;

  maxDate = new Date(2006, 11, 31);
  minDate = new Date(1900, 0, 1);

  regions = ['Kanto', 'Johto', 'Hoenn', 'Sinnoh', 'Unova', 'Kalos', 'Alola', 'Galar', 'Paldea'];
  trainerClasses = ['Youngster', 'Bug Catcher', 'Ace Trainer', 'Gym Leader', 'Elite Four', 'Champion'];

  starterTypes = [
    { label: 'Fire', icon: '🔥', value: 'Fire' },
    { label: 'Water', icon: '💧', value: 'Water' },
    { label: 'Grass', icon: '🌿', value: 'Grass' },
  ];

  badges = [
    { name: 'Boulder', icon: '🪨', selected: false },
    { name: 'Cascade', icon: '💧', selected: false },
    { name: 'Thunder', icon: '⚡', selected: false },
    { name: 'Rainbow', icon: '🌈', selected: false },
    { name: 'Soul',    icon: '👻', selected: false },
    { name: 'Marsh',   icon: '🌿', selected: false },
    { name: 'Volcano', icon: '🌋', selected: false },
    { name: 'Earth',   icon: '🌍', selected: false },
  ];

  trainerName = ''; email = ''; password = '';
  gender = ''; birthDate!: Date; phone = '';
  region = ''; starterType = ''; trainerClass = '';

  identityForm = new FormGroup({
    trainerName: new FormControl('', [Validators.required, Validators.minLength(3)]),
    email:       new FormControl('', [Validators.required, Validators.email]),
    password:    new FormControl('', [Validators.required, alphanumericStartsWithLetter]),
    gender:      new FormControl('', [Validators.required]),
    birthDate:   new FormControl(null, [Validators.required, bornBefore2007]),
    phone:       new FormControl('', [Validators.required, Validators.pattern(/^\d{10,11}$/)]),
  });

  profileForm = new FormGroup({
    region:       new FormControl('', [Validators.required]),
    trainerClass: new FormControl('', [Validators.required]),
    starterType:  new FormControl('', [Validators.required]),
    agreeTerms:   new FormControl(false, [Validators.requiredTrue]),
  });

  toggleBadge(badge: any): void { badge.selected = !badge.selected; }

  get selectedBadgeCount(): number { return this.badges.filter(b => b.selected).length; }
  get selectedBadgeNames(): string {
    const names = this.badges.filter(b => b.selected).map(b => b.name);
    return names.length ? names.join(', ') : 'None';
  }

  onSubmit(): void {
    if (this.identityForm.valid && this.profileForm.valid) {
      this.submitted = true;
      const i = this.identityForm.value;
      const p = this.profileForm.value;
      this.trainerName  = i.trainerName!;
      this.email        = i.email!;
      this.password     = i.password!;
      this.gender       = i.gender!;
      this.birthDate    = i.birthDate!;
      this.phone        = i.phone!;
      this.region       = p.region!;
      this.trainerClass = p.trainerClass!;
      this.starterType  = p.starterType!;
    } else {
      this.identityForm.markAllAsTouched();
      this.profileForm.markAllAsTouched();
    }
  }
}