import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService} from '../../service/user.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formlogin:any=FormGroup;
  constructor(public userService: UserService,private router: Router) { }

  ngOnInit(): void {
    this.formlogin = new FormGroup({
      email: new FormControl('', [Validators.required,Validators.email,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
      password:new FormControl('', [Validators.required,Validators.minLength(6)]),
      
  })
  }
  get f(){
    return this.formlogin.controls;
  }
  submit(){
    if (this.formlogin.valid) {
      
      console.log(this.formlogin.value);
      // alert('User form is valid!!')
    this.userService.create(this.formlogin.value).subscribe(res => {
         
         setTimeout(() => {
           alert('Post created successfully!');
           this.router.navigateByUrl('/accueil');
         }, 5000);
          
    })
  } else {
     alert('There is a problem with the form');
  }
    
  }

}
