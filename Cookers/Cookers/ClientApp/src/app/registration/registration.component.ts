import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {

  @Output() buttonAuthClick  = new EventEmitter();
  @Output() buttonRegClick = new EventEmitter();

  public onAuthClick(): void
  {
    this.buttonAuthClick.emit();
  }

  public onRegClick(): void
  {
    this.buttonRegClick.emit();
  }

  constructor() { }

}
