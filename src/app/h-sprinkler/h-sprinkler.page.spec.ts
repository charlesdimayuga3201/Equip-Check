import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HSprinklerPage } from './h-sprinkler.page';

describe('HSprinklerPage', () => {
  let component: HSprinklerPage;
  let fixture: ComponentFixture<HSprinklerPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(HSprinklerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
