import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  userCtrl = new FormControl('', []);
  passCtrl = new FormControl('', []);

  constructor() { }

  ngOnInit(): void { }

  //métodos agregados en este proyecto
  //métodos agregados en este proyecto
  /*
  users = [];
  addUser(newUser: string) {
    if (newUser) {
      this.users.push(newUser);
    }
  }
  
  */

}
