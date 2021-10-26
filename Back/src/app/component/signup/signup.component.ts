import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService} from '../../service/user.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  form:any = FormGroup;
  constructor(public userService: UserService,private router: Router) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      fullname: new FormControl('', [Validators.required,Validators.pattern('^[a-zA-Z]+$')]),
      mail: new FormControl('', [Validators.required,Validators.email,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
      password:new FormControl('', [Validators.required,Validators.minLength(6)]) 
  })
     
  }
  get f(){
    return this.form.controls;
  }
  submit(){
    if (this.form.valid) {
      
      console.log(this.form.value);
      // alert('User form is valid!!')
    this.userService.create(this.form.value).subscribe(res => {
         console.log('Post created successfully!');
          this.router.navigateByUrl('/accueil');
    })
  } else {
     alert('There is a problem with the form');
  }
    
  }

}
