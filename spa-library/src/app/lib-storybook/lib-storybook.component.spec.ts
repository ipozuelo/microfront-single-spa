import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibStorybookComponent } from './lib-storybook.component';

describe('LibStorybookComponent', () => {
  let component: LibStorybookComponent;
  let fixture: ComponentFixture<LibStorybookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LibStorybookComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LibStorybookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
