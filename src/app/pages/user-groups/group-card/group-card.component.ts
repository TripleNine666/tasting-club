import {Component, Input} from '@angular/core';
import {UserGroup} from "../../../shared/interfaces/IUserGroup.interface";

@Component({
  selector: 'app-group-card',
  templateUrl: './group-card.component.html',
  styleUrls: ['./group-card.component.css']
})
export class GroupCardComponent {
  @Input() group?: UserGroup;

  getStatusByAccessType(accessType: string) {
    if (accessType === 'public') {
      return "success"
    } else if (accessType === 'private') {
      return "warning"
    } else return "danger"
  }
}
