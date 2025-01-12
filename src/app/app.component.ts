import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RegisterTfComponent } from "./register-tf/register-tf.component";
import { RegisterRfComponent } from "./register-rf/register-rf.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RegisterTfComponent, RegisterRfComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'myapp';
}
