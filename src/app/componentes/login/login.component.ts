import { importExpr, ThrowStmt } from '@angular/compiler/src/output/output_ast';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

//import {AuthService} from '@auth/auth.AuthService';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit, OnDestroy {
  private subscripcion: Subscription = new Subscription();
  
  loginForm = this.fb.group({
    userName: ['',[Validators.required]],
    userPass: ['',[Validators.required, Validators.minLength(6)]]
  })

  constructor(
    private fb: FormBuilder, 
    private router: Router,
  ) {}

  ngOnInit(): void { }
  
  ngOnDestroy(): void {
    this.subscripcion.unsubscribe();
  }

  onLogin(): void {
   /* const formValue = this.loginForm.value
    this.subscripcion.add(
      this.(formValue).subscribe((res) => {
        if (res) {
          this.router.navigate(['']);
        }
      })
    );*/
  }
  
  getErrorMessage(field: string){
    let message;
    if (this.loginForm.get(field).errors.required) {
      message="Debes ingresar un valor"
    }else if(this.loginForm.get(field).hasError('minlength')){
      message="Este campo debe contener por lo menos 6  caracteres"
    }
    return message;
  }

  isValidField(field: string){
    return (this.loginForm.get(field).touched || this.loginForm.get(field).dirty) &&
    !this.loginForm.get(field).valid
  }


  /*
  authUser(event: Event){
    event.preventDefault();//desactiva los eventos por defecto de angular
    if (this.myForm.valid) {
      const valor = this.myForm.value;
      console.log("usuario: "+valor.userName);
      console.log("contra: "+valor.userPass);
      this.users.push(valor.userName);
      this.users.push(valor.userPass);

      for (let index = 0; index < this.users.length; index++) {
        const element = this.users[index];
        console.log("Esto hay en el array: "+element);
      }
    }
  }*/
}
