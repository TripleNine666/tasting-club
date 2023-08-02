import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  private isAuthenticated = new BehaviorSubject(false);
  isAuthenticated$ = this.isAuthenticated.asObservable();

  changeIsAuthenticated(value: boolean) {
    this.isAuthenticated.next(value);
  }

}
