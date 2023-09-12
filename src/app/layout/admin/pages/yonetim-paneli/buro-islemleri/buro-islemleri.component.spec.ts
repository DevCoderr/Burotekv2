import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuroIslemleriComponent } from './buro-islemleri.component';

describe('BuroIslemleriComponent', () => {
  let component: BuroIslemleriComponent;
  let fixture: ComponentFixture<BuroIslemleriComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BuroIslemleriComponent]
    });
    fixture = TestBed.createComponent(BuroIslemleriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
