import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterRfComponent } from './register-rf.component';

describe('RegisterRfComponent', () => {
  let component: RegisterRfComponent;
  let fixture: ComponentFixture<RegisterRfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegisterRfComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterRfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
