import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  registroUsuForm: FormGroup;
  users: Array<string> = [];

  constructor(private formBuilder: FormBuilder) {
    this.registroForm();
  }

  ngOnInit(): void {}

  private registroForm(){
    this.registroUsuForm = this.formBuilder.group({
      Name: ['',[Validators.required]],
      userName: ['',[Validators.required]],
      pass: ['',[Validators.required]],
      email: ['',[Validators.required]]
    }); 
  }

  addUser(event: Event){
    event.preventDefault();//desactiva los eventos por defecto de angular
    if (this.registroUsuForm.valid) {
      const valor = this.registroUsuForm.value;
      if (valor.userName != this.verUser()) {
        this.users.push(valor.Name);
        this.users.push(valor.userName);
        this.users.push(valor.pass);
        this.users.push(valor.email);  
        this.verUser();
        console.warn("Usuario creado");
      } else {
        console.log("Nombre usuario existe");
      }
      
    }    
  }

  verUser(){
    this.users.forEach(element => {
      console.log("Usuario: "+this.users);
    });
  }
}
