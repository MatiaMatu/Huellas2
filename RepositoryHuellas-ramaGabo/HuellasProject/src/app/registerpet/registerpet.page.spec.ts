import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegisterpetPage } from './registerpet.page';

describe('RegisterpetPage', () => {
  let component: RegisterpetPage;
  let fixture: ComponentFixture<RegisterpetPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(RegisterpetPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
