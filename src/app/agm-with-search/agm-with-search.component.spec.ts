import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgmWithSearchComponent } from './agm-with-search.component';

describe('AgmWithSearchComponent', () => {
  let component: AgmWithSearchComponent;
  let fixture: ComponentFixture<AgmWithSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgmWithSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgmWithSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
