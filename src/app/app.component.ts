import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from './services/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  implements OnInit, OnDestroy {
  title = 'mini-product-store';
  isLoggedIn = false;
  private authSubscription: Subscription | undefined;

  constructor(private authService: AuthService) {}

  ngOnInit() {
    // Subscribe to isLoggedIn$ once
    this.authSubscription = this.authService.isLoggedIn$.subscribe(
      (status) => {
        this.isLoggedIn = status;
        console.log(`Login status updated: ${status}`);
      },
      (error) => console.error("Error in login status subscription:", error)
    );
  }

  login() {
    this.authService.login();
  }

  logout() {
    this.authService.logout();
  }

  ngOnDestroy() {
    // Unsubscribe to avoid memory leaks or unwanted re-evaluation
    if (this.authSubscription) {
      this.authSubscription.unsubscribe();
    }
  }
}