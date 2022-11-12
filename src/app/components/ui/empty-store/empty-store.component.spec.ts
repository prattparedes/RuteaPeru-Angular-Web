import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmptyStoreComponent } from './empty-store.component';

describe('EmptyStoreComponent', () => {
  let component: EmptyStoreComponent;
  let fixture: ComponentFixture<EmptyStoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmptyStoreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmptyStoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
