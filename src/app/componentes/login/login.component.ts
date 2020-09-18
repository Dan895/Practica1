import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  myForm: FormGroup;
  userCtrl = new FormControl('', []);
  passCtrl = new FormControl('', []);

  constructor() { }

  ngOnInit(): void { }

  getUser(event: Event){
    event.preventDefault();
    console.log(this.userCtrl.value);
  }
  //métodos agregados en este proyecto
  
  users = [];
  addUser(newUser: string) {
    if (newUser) {
      this.users.push(newUser);
    }
  }
}
