import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-authorization',
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.css']
})
export class AuthorizationComponent {

  @Output() buttonAuthClick  = new EventEmitter();
  @Output() buttonRegClick = new EventEmitter();

  public onAuthClick(): void
  {
    this.buttonAuthClick.emit();
  }

  public onSignInClick(): void
  {
    this.buttonRegClick.emit();
  }

  constructor() { }

}
