import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorReloadingComponent } from './error-reloading.component';

describe('ErrorReloadingComponent', () => {
  let component: ErrorReloadingComponent;
  let fixture: ComponentFixture<ErrorReloadingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ErrorReloadingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrorReloadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
