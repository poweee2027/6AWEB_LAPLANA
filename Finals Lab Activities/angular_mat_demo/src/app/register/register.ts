import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSliderModule } from '@angular/material/slider';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSliderModule,
    MatButtonModule,
    MatSelectModule,
    MatCheckboxModule,
    MatCardModule,
    MatIconModule,
  ],
  templateUrl: './register.html',
  styleUrls: ['./register.css'],
})
export class RegisterComponent {

  userName: string = '';
  email: string = '';
  password: string = '';
  gender: string = '';
  address: string = '';
  birthDate!: Date;
  angularSkillLevel: number = 5;
  minSkillLevel: number = 1;
  maxSkillLevel: number = 10;
  country: string = '';
  agreeTerms: boolean = false;
  submitted: boolean = false;

  countries: string[] = ['Philippines', 'USA', 'Japan', 'Canada', 'Australia', 'Germany'];

  formdata = new FormGroup({
    userName:          new FormControl('', [Validators.required]),
    email:             new FormControl('', [Validators.required, Validators.email]),
    password:          new FormControl('', [Validators.required, Validators.minLength(8)]),
    gender:            new FormControl('', [Validators.required]),
    birthDate:         new FormControl(null, [Validators.required]),
    address:           new FormControl(''),
    angularSkillLevel: new FormControl(5),
    country:           new FormControl('', [Validators.required]),
    agreeTerms:        new FormControl(false, [Validators.requiredTrue]),
  });

  onClickSubmit(data: any) {
    this.submitted = true;
    this.userName          = data.userName;
    this.email             = data.email;
    this.password          = data.password;
    this.gender            = data.gender;
    this.address           = data.address;
    this.birthDate         = data.birthDate;
    this.angularSkillLevel = data.angularSkillLevel;
    this.country           = data.country;
    this.agreeTerms        = data.agreeTerms;

    if (this.formdata.valid) {
      console.log('Form submitted successfully!', this.formdata.value);
    } else {
      console.log('Form has errors. Please check all fields.');
    }
  }
}