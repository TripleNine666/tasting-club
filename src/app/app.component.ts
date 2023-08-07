import { Component } from '@angular/core';
import {NbAuthService} from "@nebular/auth";
import {AuthService} from "./services/auth/auth.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private nbAuthService: NbAuthService, private authService: AuthService) { }

  ngOnInit(): void {
    this.nbAuthService.onAuthenticationChange().subscribe(auth => {
      this.authService.changeIsAuthenticated(auth);
    });
  }
}
