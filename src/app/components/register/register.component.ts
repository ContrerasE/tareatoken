import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
formReg: FormGroup;

constructor( private userService: UserService, private router: Router){
  this.formReg = new FormGroup({
    email: new FormControl(),
    password: new FormControl()
  })
}
ngOnInit(): void{
}
login(){
  this.router.navigate(['/login']);
}
onSubmit(email: string, password: string){
  this.userService.register(email, password)
  .then(response =>{
    console.log(response);
    this.router.navigate(['/login']);
  })
  .catch(error => console.log(error));
}
}
