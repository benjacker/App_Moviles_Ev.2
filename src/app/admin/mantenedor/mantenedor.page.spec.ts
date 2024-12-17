import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MantenedorPage } from './mantenedor.page';

describe('MantenedorPage', () => {
  let component: MantenedorPage;
  let fixture: ComponentFixture<MantenedorPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MantenedorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
