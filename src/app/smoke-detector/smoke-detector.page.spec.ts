import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SmokeDetectorPage } from './smoke-detector.page';

describe('SmokeDetectorPage', () => {
  let component: SmokeDetectorPage;
  let fixture: ComponentFixture<SmokeDetectorPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SmokeDetectorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
