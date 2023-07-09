import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FireExtinguisherPage } from './fire-extinguisher.page';

describe('FireExtinguisherPage', () => {
  let component: FireExtinguisherPage;
  let fixture: ComponentFixture<FireExtinguisherPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(FireExtinguisherPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
