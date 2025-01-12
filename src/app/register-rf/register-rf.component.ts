import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AbstractControl, FormBuilder, FormControl, FormGroup,  ReactiveFormsModule, ValidationErrors, Validators} from '@angular/forms';

@Component({
  selector: 'app-register-rf',
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './register-rf.component.html',
  styleUrl: './register-rf.component.css'
})
export class RegisterRfComponent {

  usernameCtrl: FormControl;
  passwordCtrl: FormControl;
  birthdateCtrl: FormControl;

  userForm: FormGroup;

  static isOldEnough(control: AbstractControl): ValidationErrors | null {
    // control is a date input, so we can build the Date from the value
    const birthDatePlus18 = new Date(control.value);
    birthDatePlus18.setFullYear(birthDatePlus18.getFullYear() + 18);
    return birthDatePlus18 < new Date() ? null : { tooYoung: true };
 }

  constructor(fb: FormBuilder) {

     this.usernameCtrl = fb.control("",[Validators.required, Validators.minLength(3)]);
     this.passwordCtrl = fb.control("",Validators.required);
     this.birthdateCtrl = fb.control("", { validators: [Validators.required, RegisterRfComponent.isOldEnough], nonNullable: true 
    });

     this.userForm = fb.group({
        username: this.usernameCtrl,
        password: this.passwordCtrl,
        birthdate: this.birthdateCtrl
    });
  }
  reset(): void {
     this.usernameCtrl.setValue("");
     this.passwordCtrl.setValue("");
  }
  register(): void {
     console.log(this.userForm.value);
     this.reset();
  }
}
