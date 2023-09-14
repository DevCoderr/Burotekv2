import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArsivTurleriComponent } from './arsiv-turleri.component';

describe('ArsivTurleriComponent', () => {
  let component: ArsivTurleriComponent;
  let fixture: ComponentFixture<ArsivTurleriComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ArsivTurleriComponent]
    });
    fixture = TestBed.createComponent(ArsivTurleriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
