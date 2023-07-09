import { ComponentFixture, TestBed } from '@angular/core/testing';
import { USprinklerPage } from './u-sprinkler.page';

describe('USprinklerPage', () => {
  let component: USprinklerPage;
  let fixture: ComponentFixture<USprinklerPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(USprinklerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
