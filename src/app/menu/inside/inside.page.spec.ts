import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InsidePage } from './inside.page';

describe('InsidePage', () => {
  let component: InsidePage;
  let fixture: ComponentFixture<InsidePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(InsidePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
