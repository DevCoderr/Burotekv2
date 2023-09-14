import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YardimVideolariComponent } from './yardim-videolari.component';

describe('YardimVideolariComponent', () => {
  let component: YardimVideolariComponent;
  let fixture: ComponentFixture<YardimVideolariComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [YardimVideolariComponent]
    });
    fixture = TestBed.createComponent(YardimVideolariComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
