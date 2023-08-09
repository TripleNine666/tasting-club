import {Component, OnInit} from '@angular/core';
import {GroupService} from "../../services/group/group.service";
import {UserGroup} from "../../shared/interfaces/IUserGroup.interface";
import {NbDialogService} from "@nebular/theme";
import {CreateGroupDialogComponent} from "../../components/create-group-dialog/create-group-dialog.component";

@Component({
  selector: 'app-user-groups',
  templateUrl: './user-groups.component.html',
  styleUrls: ['./user-groups.component.css']
})
export class UserGroupsComponent implements OnInit{

  constructor(private groupService: GroupService, private dialogService: NbDialogService) { }

  userGroups: UserGroup[] = [];
  sortCriteria = 'title';


  ngOnInit() {
    this.getUserGroups();
  }

  getUserGroups() {
    this.groupService.getUserGroups().subscribe((userGroups: UserGroup[]) => {
      this.userGroups = userGroups;
      console.log(this.userGroups)
    })
  }

  updateSorting(value: any): void {
    this.sortCriteria = value[0];
    console.log(this.sortCriteria)
  }

  openCreateGroupDialog() {
    this.dialogService.open(CreateGroupDialogComponent, {
      context: {},
    }).onClose.subscribe(newGroup => {
      if (newGroup) {
        // request to save new group
        this.groupService.createUserGroup(newGroup as UserGroup).subscribe(ug => {
          console.log(ug)
          this.userGroups.push(ug);
        })
      }
    });
  }
}
