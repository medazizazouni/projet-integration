import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifpersoComponent } from './modifperso.component';

describe('ModifpersoComponent', () => {
  let component: ModifpersoComponent;
  let fixture: ComponentFixture<ModifpersoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifpersoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifpersoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
