import { Component, OnDestroy } from '@angular/core';
import { AuthService } from './common/auth.service';
import { Router } from '@angular/router';
import { Subscription, merge } from 'rxjs';
import { User } from './common/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy {

  user: User;
  userSubscription: Subscription;
  title = 'repo-viewer';

  constructor(private authService: AuthService, private router: Router) {
    this.userSubscription = this.authService.user$.subscribe((user) => {
      this.user = user;
    });
  }

  ngOnDestroy(): void {
    this.userSubscription.unsubscribe();
  }

  logout() {
    this.authService.logout().subscribe(() => {
      this.router.navigate(['/login']);
    });
  }
}
