import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet

  ],
  templateUrl: './app.component.html'
})

export class AppComponent {
  constructor(
    private authService: AuthService
  ) {
  }
}
