import { Routes } from '@angular/router';
import { BookComponent } from './book/book.component';
import { TicketComponent } from './ticket/ticket.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'book',
    pathMatch: 'full'
  },
  {
    path: 'book',
    component: BookComponent
  },
  {
    path: 'ticket',
    component: TicketComponent
  }
];
