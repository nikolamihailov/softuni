import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Greeting } from './greeting';

describe('Greeting', () => {
  let component: Greeting;
  let fixture: ComponentFixture<Greeting>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Greeting]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Greeting);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
