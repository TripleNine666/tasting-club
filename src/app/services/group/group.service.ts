import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {UserGroup} from "../../shared/interfaces/IUserGroup.interface";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class GroupService {
  private userGroupsUrl = 'api/userGroups';

  constructor(private http: HttpClient) { }


  getUserGroups(): Observable<UserGroup[]> {
    return this.http.get<UserGroup[]>(this.userGroupsUrl);
  }


  createUserGroup(userGroup: UserGroup): Observable<UserGroup> {
    return this.http.post<UserGroup>(this.userGroupsUrl, userGroup)
  }
}
