import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindRecipeFormComponent } from './find-recipe-form.component';

describe('FindRecipeFormComponent', () => {
  let component: FindRecipeFormComponent;
  let fixture: ComponentFixture<FindRecipeFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindRecipeFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindRecipeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
