import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicAddressComponent } from './dynamic-address.component';

describe('DynamicAddressComponent', () => {
  let component: DynamicAddressComponent;
  let fixture: ComponentFixture<DynamicAddressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DynamicAddressComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
