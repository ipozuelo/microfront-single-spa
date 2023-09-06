import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TranslateAngularComponent } from './translate-angular.component';

describe('TranslateAngularComponent', () => {
  let component: TranslateAngularComponent;
  let fixture: ComponentFixture<TranslateAngularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TranslateAngularComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TranslateAngularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
