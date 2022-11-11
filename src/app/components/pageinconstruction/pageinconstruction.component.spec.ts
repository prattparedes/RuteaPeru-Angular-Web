import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageinconstructionComponent } from './pageinconstruction.component';

describe('PageinconstructionComponent', () => {
  let component: PageinconstructionComponent;
  let fixture: ComponentFixture<PageinconstructionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageinconstructionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageinconstructionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
