import { ComponentFixture, TestBed } from '@angular/core/testing';
import { USmokeDetectorPage } from './u-smoke-detector.page';

describe('USmokeDetectorPage', () => {
  let component: USmokeDetectorPage;
  let fixture: ComponentFixture<USmokeDetectorPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(USmokeDetectorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
