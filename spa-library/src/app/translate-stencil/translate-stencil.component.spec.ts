import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TranslateStencilComponent } from './translate-stencil.component';

describe('TranslateStencilComponent', () => {
  let component: TranslateStencilComponent;
  let fixture: ComponentFixture<TranslateStencilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TranslateStencilComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TranslateStencilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
