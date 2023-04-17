import { Component } from '@angular/core';
import { Input, Output, EventEmitter } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {

  @Input() showAddClient = false;
  @Output() toggle = new EventEmitter<boolean>();

  toggleAddClient() {
    this.showAddClient = !this.showAddClient;
    this.toggle.emit(this.showAddClient);
  }

}
