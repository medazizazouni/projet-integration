import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoututilComponent } from './ajoututil.component';

describe('AjoututilComponent', () => {
  let component: AjoututilComponent;
  let fixture: ComponentFixture<AjoututilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjoututilComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoututilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
