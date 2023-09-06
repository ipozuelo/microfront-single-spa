import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TranslateVueComponent } from './translate-vue.component';

describe('TranslateVueComponent', () => {
  let component: TranslateVueComponent;
  let fixture: ComponentFixture<TranslateVueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TranslateVueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TranslateVueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
