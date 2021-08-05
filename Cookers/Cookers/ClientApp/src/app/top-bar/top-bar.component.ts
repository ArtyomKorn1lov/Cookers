import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {

  pageId: number = null;
  public buttonAuthState: boolean = false;
  public buttonRegState: boolean = false;

  constructor() {
  }

  onAuthClick(): void
  {
    this.buttonAuthState = true;
  }

  closeAuthForm(): void
  {
    this.buttonAuthState = false;
  }

  btnRegClick(): void
  {
    this.buttonRegState = true;
  }

  closeRegForm(): void
  {
    this.buttonRegState = false;
  }

  onClickMain(id: number)
  {
    if(id >= 1 && id <= 3)
    {
      this.pageId = id;
    }
  }

  async ngOnInit() {
    this.pageId = 1;
  }
}
