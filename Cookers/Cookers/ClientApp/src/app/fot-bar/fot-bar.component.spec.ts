import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FotBarComponent } from './fot-bar.component';

describe('FotBarComponent', () => {
  let component: FotBarComponent;
  let fixture: ComponentFixture<FotBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FotBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FotBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
