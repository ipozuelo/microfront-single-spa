import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StyleDictionaryComponent } from './style-dictionary.component';

describe('StyleDictionaryComponent', () => {
  let component: StyleDictionaryComponent;
  let fixture: ComponentFixture<StyleDictionaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StyleDictionaryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StyleDictionaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
