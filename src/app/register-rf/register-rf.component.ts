import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup,  ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-register-rf',
  imports: [ReactiveFormsModule],
  templateUrl: './register-rf.component.html',
  styleUrl: './register-rf.component.css'
})
export class RegisterRfComponent {

  usernameCtrl: FormControl;
  passwordCtrl: FormControl;

  userForm: FormGroup;

  constructor(fb: FormBuilder) {

     this.usernameCtrl = fb.control("your name ...");
     this.passwordCtrl = fb.control("your password ...");

     this.userForm = fb.group({
        username: this.usernameCtrl,
        password: this.passwordCtrl
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
