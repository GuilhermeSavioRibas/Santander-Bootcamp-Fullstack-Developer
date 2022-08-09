import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OticastoreAppComponent } from './oticastore-app.component';

describe('OticastoreAppComponent', () => {
  let component: OticastoreAppComponent;
  let fixture: ComponentFixture<OticastoreAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OticastoreAppComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OticastoreAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
