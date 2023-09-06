import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TranslateReactComponent } from './translate-react.component';

describe('TranslateReactComponent', () => {
  let component: TranslateReactComponent;
  let fixture: ComponentFixture<TranslateReactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TranslateReactComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TranslateReactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
