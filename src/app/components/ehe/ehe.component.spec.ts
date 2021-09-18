import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EheComponent } from './ehe.component';

describe('EheComponent', () => {
  let component: EheComponent;
  let fixture: ComponentFixture<EheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EheComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
