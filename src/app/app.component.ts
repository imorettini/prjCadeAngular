import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '../../node_modules/@angular/forms';
import { Student } from './student';
import { Validations } from './validations'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  studentForm: FormGroup;
  constructor(private fb: FormBuilder) { }
  ngOnInit(): void {
    this.validateStudentForm();
  }
  //Vou enviar o CPF para onde? Será que devemos puxar o POST aqui?
  sendData() {
    console.log(this.studentForm.value);
    this.studentForm.reset();

  }
  validateStudentForm() {
    this.studentForm = this.fb.group({

      cpf: ['', Validators.compose([Validations.cpfValidation])],
    });

  }
  //Propriedade para obter os erros de validação 
  get cpf() {
    return this.studentForm.get('cpf');
  }
}
