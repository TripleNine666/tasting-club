import {ChangeDetectionStrategy, Component, Input, } from '@angular/core';
import {NbAuthService} from "@nebular/auth";
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {
  constructor(private authService: NbAuthService, private router: Router) {
  }
  @Input() isAuthenticated = false;

  logOut(): void {
    this.authService.logout('email').subscribe(() => {
      this.router.navigate(['']).then();
    })
  }
}
