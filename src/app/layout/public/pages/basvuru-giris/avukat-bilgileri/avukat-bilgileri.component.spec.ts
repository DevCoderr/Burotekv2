import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvukatBilgileriComponent } from './avukat-bilgileri.component';

describe('AvukatBilgileriComponent', () => {
  let component: AvukatBilgileriComponent;
  let fixture: ComponentFixture<AvukatBilgileriComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AvukatBilgileriComponent]
    });
    fixture = TestBed.createComponent(AvukatBilgileriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
