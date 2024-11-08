import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isLoggedIn = new BehaviorSubject<boolean>(false);
  isLoggedIn$ = this.isLoggedIn.asObservable();



  login() {
    console.log('Login called');
    this.isLoggedIn$.pipe(take(1)).subscribe(isLoggedIn => {
      if (!isLoggedIn) {
        // Perform any action for logged-out state without triggering endless calls
        console.log('User is not logged in');
        this.isLoggedIn.next(true);
      }
    });
    
  }

  logout() {
    console.log('Logout called');
    this.isLoggedIn$.pipe(take(1)).subscribe(isLoggedIn => {
      if (isLoggedIn) {
        // Perform any action for logged-in state without triggering endless calls
        console.log('User is logged in');
        this.isLoggedIn.next(false);
      }
    });
  }
}
