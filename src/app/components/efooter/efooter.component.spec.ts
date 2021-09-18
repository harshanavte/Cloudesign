import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EfooterComponent } from './efooter.component';

describe('EfooterComponent', () => {
  let component: EfooterComponent;
  let fixture: ComponentFixture<EfooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EfooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EfooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
