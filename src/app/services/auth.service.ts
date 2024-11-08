import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isLoggedInSubject = new BehaviorSubject<boolean>(false); // Default is logged out
  isLoggedIn$: Observable<boolean> = this.isLoggedInSubject.asObservable();

  login() {
    console.log("Logging in...");
    this.isLoggedInSubject.next(true);
  }

  logout() {
    console.log("Logging out...");
    this.isLoggedInSubject.next(false);
  }

  // Helper to get the current value of login status
  getIsLoggedIn(): boolean {
    return this.isLoggedInSubject.value;
  }
}
