import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserModel } from '../Models';

@Component({
  selector: 'app-register-tf',
  imports: [FormsModule],
  templateUrl: './register-tf.component.html',
  styleUrl: './register-tf.component.css'
})
export class RegisterTfComponent {

  user: UserModel = {
    username: "",
    password: ""
  };
  register(): void {
    console.log(this.user);
  }
}
