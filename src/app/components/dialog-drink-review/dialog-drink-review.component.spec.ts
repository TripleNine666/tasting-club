import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogDrinkReviewComponent } from './dialog-drink-review.component';

describe('DialogDrinkReviewComponent', () => {
  let component: DialogDrinkReviewComponent;
  let fixture: ComponentFixture<DialogDrinkReviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogDrinkReviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogDrinkReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
