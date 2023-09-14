import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotListesiComponent } from './not-listesi.component';

describe('NotListesiComponent', () => {
  let component: NotListesiComponent;
  let fixture: ComponentFixture<NotListesiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NotListesiComponent]
    });
    fixture = TestBed.createComponent(NotListesiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
