import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router'; // 1. Import these

@Component({
  selector: 'app-root',
  standalone: true,
  // 2. Add them to the imports array below
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class AppComponent {
  title = 'ANGULAR_FORMS';
}
