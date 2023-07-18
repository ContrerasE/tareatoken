import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  formLogin: FormGroup;

  constructor(private userService: UserService,
    private router: Router){
    this.formLogin = new FormGroup({
      email: new FormControl(),
      password: new FormControl()
    })
  }

  ngOnInit(): void{

  }

  register(){
    this.router.navigate(['/register']);
  }

  onSubmit(email: string, password: string){
    this.userService.login(email, password)
    .then(response =>{
      console.log(response);
      this.router.navigate(['/main']);
    })
    .catch(error=> console.log(error));
  }

  onClick(){
    this.userService.loginWithGoogle()
    .then(response =>{
      console.log(response);
      this.router.navigate(['/main']);
    })
    .catch(error => console.log(error));
  }

}
