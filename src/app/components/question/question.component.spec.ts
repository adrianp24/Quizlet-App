import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateQuestionContainerComponent } from './question.component';

describe('CreateQuestionContainerComponent', () => {
  let component: CreateQuestionContainerComponent;
  let fixture: ComponentFixture<CreateQuestionContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateQuestionContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateQuestionContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
