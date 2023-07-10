import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SprinklerPage } from './sprinkler.page';

describe('SprinklerPage', () => {
  let component: SprinklerPage;
  let fixture: ComponentFixture<SprinklerPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SprinklerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
