import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SpecificnoticePage } from './specificnotice.page';

describe('SpecificnoticePage', () => {
  let component: SpecificnoticePage;
  let fixture: ComponentFixture<SpecificnoticePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SpecificnoticePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
