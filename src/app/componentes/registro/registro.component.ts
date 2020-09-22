import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
//import { timingSafeEqual } from 'crypto';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})

export class RegistroComponent implements OnInit {
  //Variables declaradas
  registroUsuForm: FormGroup;
  users:Array<any> = [ 
    { Name: "Daniel Galindo", userName: "Dan8", userPass: 123456, Email: "da8@correo.com" },
    { Name: "Esmeralda Stephanya", userName: "moon", userPass: 654321, Email: "moon@correo.com" } 
  ]
  

  constructor(private fb: FormBuilder) {
    this.registroForm();
    
  }

  ngOnInit(): void {}

  private registroForm(){
    this.registroUsuForm = this.fb.group({
      Name: ['',[Validators.required]],
      userName: ['',[Validators.required]],
      userPass: ['',[Validators.required, Validators.minLength(4)]],
      confirmPass: ['', [Validators.required]],
      Email: ['',[Validators.required]]
    }); 
  }

  saveUser(values: any){
    if (this.registroUsuForm.valid) {
      const valor = this.registroUsuForm.value;  
        this.users.push({Name: valor.Name, userName: valor.userName, userPass: valor.userPass, Email: valor.Email})
        console.log("Usuario creado");
        this.users.forEach(element => {
          console.log("Nombre usuarios: "+element.Name)
        });
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
    } else if (this.registroUsuForm.value.Email){};
    return message;
  }

  isValidField(field: string){
    return (this.registroUsuForm.get(field).touched || this.registroUsuForm.get(field).dirty) && 
    !this.registroUsuForm.get(field).valid
  }

  passValidator(){
    let message
    if(this.registroUsuForm.value.userPass != this.registroUsuForm.value.confirmPass){
      message="Las contraseñas no coinciden"
    }
    return message;
  }

}
