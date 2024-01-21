import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {
  ReactiveFormsModule,
  FormControl,
  FormGroup,
  Validators
} from "@angular/forms";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  form = new FormGroup({
    login: new FormControl('', Validators.required), email: new FormControl(
      '', [Validators.required, Validators.email]
    ),
    password: new FormControl('')
  })

  handle() {
    console.log(this.form.get(['login'])!.value)
  }

  ngOnInit(): void { }

}
