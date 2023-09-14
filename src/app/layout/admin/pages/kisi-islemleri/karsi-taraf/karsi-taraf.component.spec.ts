import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KarsiTarafComponent } from './karsi-taraf.component';

describe('KarsiTarafComponent', () => {
  let component: KarsiTarafComponent;
  let fixture: ComponentFixture<KarsiTarafComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KarsiTarafComponent]
    });
    fixture = TestBed.createComponent(KarsiTarafComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
