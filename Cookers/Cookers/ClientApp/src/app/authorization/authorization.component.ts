import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-authorization',
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.css']
})
export class AuthorizationComponent implements OnInit {

  @Output() buttonClick  = new EventEmitter();

  public onClick(): void
  {
    this.buttonClick.emit();
  }

  constructor() { }

  ngOnInit() {
  }

}
