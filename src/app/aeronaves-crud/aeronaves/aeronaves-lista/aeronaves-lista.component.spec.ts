import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AeronavesListaComponent } from './aeronaves-lista.component';

describe('AeronavesListaComponent', () => {
  let component: AeronavesListaComponent;
  let fixture: ComponentFixture<AeronavesListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AeronavesListaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AeronavesListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
