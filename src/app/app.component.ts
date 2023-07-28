import { Component } from '@angular/core';
import {NbAuthService} from "@nebular/auth";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isAuthenticated = false; // переменная для хранения статуса аутентификации

  constructor(private authService: NbAuthService) { }

  ngOnInit(): void {
    this.authService.onAuthenticationChange().subscribe(auth => {
      this.isAuthenticated = auth; // присваиваем значение переменной
    });
  }
}
