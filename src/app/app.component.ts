import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '../../node_modules/@angular/forms';
import { User } from './user';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  userForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.createUserForm();
  }
  sendData() {
    console.log(this.userForm.value);
  }
  createUserForm() {
    this.userForm = this.fb.group({
      cpf: [''],
    });
  }
}
