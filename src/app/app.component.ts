import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '../../node_modules/@angular/forms';
import { User } from './user';
import { Validations } from './validations'


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
  //Vou enviar o CPF para onde? Será que devemos puxar o POST aqui?
  sendData() {
    console.log(this.userForm.value); 
    this.userForm.reset();

  }
  createUserForm() {
    this.userForm = this.fb.group({
      cpf: ['', Validators.compose([Validators.required])],
    });
  
  }
  //Propriedade para obter os erros de validação 
  get cpf() {
    return this.userForm.get('cpf');
  }
}

