import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KisiIslemleriComponent } from './kisi-islemleri.component';

describe('KisiIslemleriComponent', () => {
  let component: KisiIslemleriComponent;
  let fixture: ComponentFixture<KisiIslemleriComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KisiIslemleriComponent]
    });
    fixture = TestBed.createComponent(KisiIslemleriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
