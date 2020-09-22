import { importExpr, ThrowStmt } from '@angular/compiler/src/output/output_ast';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { Subscription } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit, OnDestroy {
  alerta:boolean=false
  msj:string
  private subscripcion: Subscription = new Subscription();
  users:Array<any> = [ 
    { Name: "Daniel Galindo", userName: "Dan8", userPass: 123456, Email: "da8@correo.com" },
    { Name: "Esmeralda Stephanya", userName: "moon", userPass: 654321, Email: "moon@correo.com" } 
  ]

  loginForm = this.fb.group({
    userName: ['',[Validators.required]],
    userPass: ['',[Validators.required, Validators.minLength(4)]]
  })

  constructor(
    private fb: FormBuilder, 
    private router: Router
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
      message="Este campo debe contener por lo menos 4  caracteres"
    }
    return message;
  }

  isValidField(field: string){
    return (this.loginForm.get(field).touched || this.loginForm.get(field).dirty) &&
    !this.loginForm.get(field).valid
  }
  

  authUser(values:any){
    if (this.loginForm.valid) {
      const valor = this.loginForm.value;
      for (let i = 0; i < this.users.length; i++) {
        if (valor.userName == this.users[i].userName && valor.userPass == this.users[i].userPass) {
          console.log("Si existe el usuario: "+this.users[i].Name)
          this.msj = "Haz iniciado Sesión!!!"
          break
        } else {
          this.msj="Usuario no existe"
        }
        
      }
    }
  }
}
