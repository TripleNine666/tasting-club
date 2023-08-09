import {Component, Input} from '@angular/core';
import {UserGroup} from "../../../shared/interfaces/IUserGroup.interface";

@Component({
  selector: 'app-group-card',
  templateUrl: './group-card.component.html',
  styleUrls: ['./group-card.component.css']
})
export class GroupCardComponent {
  @Input() group?: UserGroup;
  backgroundImageStyle: string | undefined;

  getStatusByAccessType(accessType: string) {
    if (accessType === 'public') {
      return "success"
    } else if (accessType === 'private') {
      return "warning"
    } else return "danger"
  }

  getBackgroundImageStyle(): string {
    if (!this.backgroundImageStyle) {
      const imageUrl = this.group?.photos ? this.group.photos[0] : 'https://battorg.by/image/cache/catalog/photo/noimage-1000x1000.png';
      this.backgroundImageStyle = `url('${imageUrl}')`;
    }
    console.log(this.backgroundImageStyle)
    return this.backgroundImageStyle;
  }
}
