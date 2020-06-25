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
    this.createStudentForm();
  }

  //Vou enviar o CPF para onde? Será que devemos puxar o POST aqui?
  sendData() {
    const formData = this.studentForm.value;

    const student = new Student(
      formData.cpf,

    );
    //alert(`O usuário ${usuario.nome} foi cadastrado com sucesso. \n Dados: ${JSON.stringify(usuario)}`);
    this.studentForm.reset();

  }
  createStudentForm() {
    this.studentForm = this.fb.group(
      {
        cpf: [
          '',
          Validators.compose([Validators.required, Validations.cpfValidation])
        ],
      }
    )
  }

  //Propriedade para obter os erros de validação 
  get cpf() {
    return this.studentForm.get('cpf');
  }
}

