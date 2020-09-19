import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
//import { debounceTime } from 'rxjs/operators';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  //Declaracion de formulario en grupo
  myForm: FormGroup;
  users: Array<string> = ["Daniel",  "1234"];
  //users: Array<string>;

  constructor(private formBuilder: FormBuilder) {
    this.buildForm();
   }

  ngOnInit(): void { }

  private buildForm(){
    this.myForm = this.formBuilder.group({
      userCtrl: ['',[Validators.required]],
      passCtrl: ['',[Validators.required]]
    }); 
  }

  
  authUser(event: Event){
    event.preventDefault();//desactiva los eventos por defecto de angular
    if (this.myForm.valid) {
      const valor = this.myForm.value;
      console.log("usuario: "+valor.userCtrl);
      console.log("contra: "+valor.passCtrl);
      this.users.push(valor.userCtrl);
      this.users.push(valor.passCtrl);

      for (let index = 0; index < this.users.length; index++) {
        const element = this.users[index];
        console.log("Esto hay en el array: "+element);
      }
    }
  }

  //métodos agregados en este proyecto
  /*
  users = [];
  addUser(newUser: string) {
    if (newUser) {
      this.users.push(newUser);
    }
  }
    //métodos que van leyendo en tiempo real la entrada
      this.myForm.valueChanges
    .pipe(
      debounceTime(500)
    )
    .subscribe(value=> {
      console.log(value);
    });
  }

  getUser(event: Event){
    event.preventDefault();
    console.log(this.myForm.value);
  }
  
  */

}
