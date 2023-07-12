import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HFireExtinguisherPage } from './h-fire-extinguisher.page';

describe('HFireExtinguisherPage', () => {
  let component: HFireExtinguisherPage;
  let fixture: ComponentFixture<HFireExtinguisherPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(HFireExtinguisherPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
