import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcercedemiComponent } from './acercedemi.component';

describe('AcercedemiComponent', () => {
  let component: AcercedemiComponent;
  let fixture: ComponentFixture<AcercedemiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcercedemiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AcercedemiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
