import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ReecComponent} from './reec.component';

describe('ReecComponent', () => {
  let component: ReecComponent;
  let fixture: ComponentFixture<ReecComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ReecComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
