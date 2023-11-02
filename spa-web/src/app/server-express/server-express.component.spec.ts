import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServerExpressComponent } from './server-express.component';

describe('ServerExpressComponent', () => {
  let component: ServerExpressComponent;
  let fixture: ComponentFixture<ServerExpressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServerExpressComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServerExpressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
