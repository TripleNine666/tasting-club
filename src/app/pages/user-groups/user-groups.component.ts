import {Component, OnInit} from '@angular/core';
import {GroupService} from "../../services/group/group.service";
import {UserGroup} from "../../shared/interfaces/IUserGroup.interface";

@Component({
  selector: 'app-user-groups',
  templateUrl: './user-groups.component.html',
  styleUrls: ['./user-groups.component.css']
})
export class UserGroupsComponent implements OnInit{

  constructor(private groupService: GroupService) { }

  userGroups: UserGroup[] = [];

  ngOnInit() {
    this.getUserGroups();
  }

  getUserGroups() {
    this.groupService.getUserGroups().subscribe((userGroups: UserGroup[]) => {
      this.userGroups = userGroups;
      console.log(this.userGroups)
    })
  }
}
