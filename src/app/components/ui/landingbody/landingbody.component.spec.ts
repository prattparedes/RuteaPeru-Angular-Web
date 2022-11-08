import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingbodyComponent } from './landingbody.component';

describe('LandingbodyComponent', () => {
  let component: LandingbodyComponent;
  let fixture: ComponentFixture<LandingbodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LandingbodyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LandingbodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
