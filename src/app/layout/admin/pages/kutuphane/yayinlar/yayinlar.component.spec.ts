import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YayinlarComponent } from './yayinlar.component';

describe('YayinlarComponent', () => {
  let component: YayinlarComponent;
  let fixture: ComponentFixture<YayinlarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [YayinlarComponent]
    });
    fixture = TestBed.createComponent(YayinlarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
