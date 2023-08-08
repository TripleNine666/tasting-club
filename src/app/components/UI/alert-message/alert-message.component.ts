import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-alert-message',
  templateUrl: './alert-message.component.html',
  styleUrls: ['./alert-message.component.css']
})
export class AlertMessageComponent {
  @Input() status: string = 'primary';
  @Input() closable: boolean = false;

  @Output() closed = new EventEmitter<void>();

  onClose() {
    this.closed.emit();
  }
}
