import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VentaDelDiaComponent } from './venta-del-dia.component';

describe('VentaDelDiaComponent', () => {
  let component: VentaDelDiaComponent;
  let fixture: ComponentFixture<VentaDelDiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VentaDelDiaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VentaDelDiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
