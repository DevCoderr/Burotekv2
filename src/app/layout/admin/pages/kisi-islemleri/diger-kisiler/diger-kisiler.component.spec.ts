import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DigerKisilerComponent } from './diger-kisiler.component';

describe('DigerKisilerComponent', () => {
  let component: DigerKisilerComponent;
  let fixture: ComponentFixture<DigerKisilerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DigerKisilerComponent]
    });
    fixture = TestBed.createComponent(DigerKisilerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
