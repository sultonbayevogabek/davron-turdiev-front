import { inject, Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class BookService {
  host = environment.host;
  private authService = inject(AuthService);
  private http = inject(HttpClient);

  getAllSeats() {
    return this.http.post(`${ this.host }/seats`, {});
  }

  setStatus(seatId: string, status: 'free' | 'on-hold') {
    return this.http.post(`${ this.host }/seats`, {
      seatId,
      status,
      userId: this.authService.userId
    });
  }

  reserveSeat(seatId: string) {
    return this.http.post(`${ this.host }/seats`, {
      seatId,
      userId: this.authService.userId
    });
  }
}
