import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {RcTileComponent} from './rc-tile.component';

describe('RcTileComponent', () => {
  let component: RcTileComponent;
  let fixture: ComponentFixture<RcTileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RcTileComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RcTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
