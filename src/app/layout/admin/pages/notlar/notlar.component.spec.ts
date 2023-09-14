import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotlarComponent } from './notlar.component';

describe('NotlarComponent', () => {
  let component: NotlarComponent;
  let fixture: ComponentFixture<NotlarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NotlarComponent]
    });
    fixture = TestBed.createComponent(NotlarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
