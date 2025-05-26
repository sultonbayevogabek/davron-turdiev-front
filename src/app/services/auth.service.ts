import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  userId: string;

  constructor() {
    this.initializeUserId();
  }

  private initializeUserId(): void {
    // Check if userId already exists in localStorage
    const existingUserId = localStorage.getItem('userId');

    if (existingUserId) {
      // Use existing userId if available
      this.userId = existingUserId;
      console.log('Using existing user ID:', this.userId);
    } else {
      // Generate new 5-digit unique ID if not available
      this.userId = this.generateUniqueId();
      // Store the new userId in localStorage
      localStorage.setItem('userId', this.userId);
      console.log('Generated new user ID:', this.userId);
    }
  }

  private generateUniqueId(): string {
    // Generate a random 5-digit number between 10000 and 99999
    const min = 10000;
    const max = 99999;
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    return randomNumber.toString();
  }
}
