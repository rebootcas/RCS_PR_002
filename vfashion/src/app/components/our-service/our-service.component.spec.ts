import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurServiceComponent } from './our-service.component';

describe('OurServiceComponent', () => {
  let component: OurServiceComponent;
  let fixture: ComponentFixture<OurServiceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OurServiceComponent]
    });
    fixture = TestBed.createComponent(OurServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
