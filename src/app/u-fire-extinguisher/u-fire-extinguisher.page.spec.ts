import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UFireExtinguisherPage } from './u-fire-extinguisher.page';

describe('UFireExtinguisherPage', () => {
  let component: UFireExtinguisherPage;
  let fixture: ComponentFixture<UFireExtinguisherPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(UFireExtinguisherPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
