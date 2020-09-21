import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { timingSafeEqual } from 'crypto';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  registroUsuForm: FormGroup;
  users:Array<any> = [ 
    { Name: "Daniel Galindo", userName: "Dan8", userPass: 123456, email: "da8@correo.com" },
    { Name: "Esmeralda Stephanya", userName: "moon", userPass: 654321, email: "moon@correo.com" } 
  ]

  constructor(private fb: FormBuilder) {
    this.registroForm();
    
  }

  ngOnInit(): void {}

  private registroForm(){
    this.registroUsuForm = this.fb.group({
      Name: ['',[Validators.required]],
      userName: ['',[Validators.required]],
      userPass: ['',[Validators.required, Validators.minLength(6)]],
      email: ['', Validators.required]
    }); 
  }

  saveUser(values){
    console.log(values);
    if (this.registroUsuForm.valid) {
      const valor = this.registroUsuForm.value;  
      this.users.push(valor.Name);
        this.users.push(valor.userName);
        this.users.push(valor.pass);
        this.users.push(valor.email);  
        console.log("Usuario creado");
    } else {
      console.log("Nombre usuario existe");
    }    
  }

  //Validaciones
  getErrorMessage(field: string){
    let message;
    if (this.registroUsuForm.get(field).errors.required) {
      message="Debes ingresar un valor"
    }else if(this.registroUsuForm.get(field).hasError('minlength')){
      message="Este campo debe contener por lo menos 4 caracteres"
    }
    return message;
  }

  isValidField(field: string){
    return (this.registroUsuForm.get(field).touched || this.registroUsuForm.get(field).dirty) && 
    !this.registroUsuForm.get(field).valid
  }
}
