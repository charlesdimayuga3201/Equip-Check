import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HSmokeDetectorPage } from './h-smoke-detector.page';

describe('HSmokeDetectorPage', () => {
  let component: HSmokeDetectorPage;
  let fixture: ComponentFixture<HSmokeDetectorPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(HSmokeDetectorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
