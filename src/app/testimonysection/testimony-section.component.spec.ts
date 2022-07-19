import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestimonySectionComponent } from './testimony-section.component';

describe('TestimonySectionComponent', () => {
  let component: TestimonySectionComponent;
  let fixture: ComponentFixture<TestimonySectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestimonySectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestimonySectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
