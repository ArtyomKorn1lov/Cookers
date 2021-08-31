import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {

  private isAuthorised: boolean = false;
  private isRegistered: boolean = false;
  public pageId: number = null;

  constructor() {
  }

  onAuthFormClick(): void
  {
    this.isAuthorised = true;
  }

  closeAuthForm(): void
  {
    this.isAuthorised = false;
  }

  onRegFormClick(): void
  {
    this.isRegistered = true;
  }

  closeRegForm(): void
  {
    this.isRegistered = false;
  }

  onClickMain(id: number)
  {
    if(id >= 1 && id <= 3)
    {
      this.pageId = id;
    }
  }

  ngOnInit() {
    this.pageId = 1;
  }
}
