import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StyleBlockComponent } from './style-block.component';

describe('StyleBlockComponent', () => {
  let component: StyleBlockComponent;
  let fixture: ComponentFixture<StyleBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StyleBlockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StyleBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
