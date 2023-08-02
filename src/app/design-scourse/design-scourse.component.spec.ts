import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesignScourseComponent } from './design-scourse.component';

describe('DesignScourseComponent', () => {
  let component: DesignScourseComponent;
  let fixture: ComponentFixture<DesignScourseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DesignScourseComponent]
    });
    fixture = TestBed.createComponent(DesignScourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
