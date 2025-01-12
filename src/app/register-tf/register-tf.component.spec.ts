import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterTfComponent } from './register-tf.component';

describe('RegisterTfComponent', () => {
  let component: RegisterTfComponent;
  let fixture: ComponentFixture<RegisterTfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegisterTfComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterTfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
