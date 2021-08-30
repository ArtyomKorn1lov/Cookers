import { Input, Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-tag-list',
  templateUrl: './tag-list.component.html',
  styleUrls: ['./tag-list.component.css']
})
export class TagListComponent implements OnInit {
  
  @Input() pageId: number;
  @Output() simpleEvent = new EventEmitter();
  @Output() childEvent = new EventEmitter();
  @Output() chiefEvent = new EventEmitter();
  @Output() partyEvent = new EventEmitter();

  constructor() { }

  public onSimpleClick(): void
  {
    this.simpleEvent.emit();
  }

  public onChildClick(): void
  {
    this.childEvent.emit();
  }

  public onChiefClick(): void
  {
    this.chiefEvent.emit();
  }

  public onPartyClick(): void
  {
    this.partyEvent.emit();
  }

  isPreviousPageMain(): boolean
  {
    if(this.pageId == 1)
    {
      return true;
    }
    return false;
  }

  ngOnInit() {
  }

}
