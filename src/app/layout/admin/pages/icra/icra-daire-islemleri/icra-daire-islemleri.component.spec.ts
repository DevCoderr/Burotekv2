import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IcraDaireIslemleriComponent } from './icra-daire-islemleri.component';

describe('IcraDaireIslemleriComponent', () => {
  let component: IcraDaireIslemleriComponent;
  let fixture: ComponentFixture<IcraDaireIslemleriComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IcraDaireIslemleriComponent]
    });
    fixture = TestBed.createComponent(IcraDaireIslemleriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
