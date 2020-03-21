import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IpxTextboxComponent } from './ipx-textbox.component';

describe('IpxTextboxComponent', () => {
  let component: IpxTextboxComponent;
  let fixture: ComponentFixture<IpxTextboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IpxTextboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IpxTextboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
