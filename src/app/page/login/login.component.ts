import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/shared/service/login/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  constructor(private oauth:LoginService) { }

  ngOnInit(): void {
  }

  login(){
    const user = document.getElementById('user') as HTMLSelectElement;
    const pass = document.getElementById('pass') as HTMLSelectElement;
    this.oauth.login(user.value,pass.value);
  }

}
