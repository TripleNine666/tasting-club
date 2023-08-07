import { Component, OnInit} from '@angular/core';
import {NbAuthService} from "@nebular/auth";
import {Router} from "@angular/router";
import {AuthService} from "../../../services/auth/auth.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit{
  constructor(private nbAuthService: NbAuthService, private router: Router, private authService: AuthService) {
  }
  isAuthenticated = false;

  ngOnInit() {
    this.authService.isAuthenticated$.subscribe(isAuth => {
      this.isAuthenticated = isAuth;
    })
  }


  logOut(): void {
    this.nbAuthService.logout('email').subscribe(() => {
      this.router.navigate(['/']).then();
    })
  }
}
