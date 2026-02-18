import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-template-demo',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './template-demo.html', // Matches your file name
  styleUrl: './template-demo.css'       // Matches your file name
})
export class TemplateDemoComponent {
  // Original Fields
  title = 'Finals Lab: Template Driven Form';
  username = '';
  email = '';
  password = '';
  role = '';
  isSubmitted = false;

  // 3 EXTRA FIELDS (Required for Assignment)
  gender = '';
  status = '';
  comments = '';

  onSubmit() {
    this.isSubmitted = true;
    console.log('Form Submitted!', {
      username: this.username,
      email: this.email,
      role: this.role,
      gender: this.gender,
      status: this.status,
      comments: this.comments
    });
  }
}
