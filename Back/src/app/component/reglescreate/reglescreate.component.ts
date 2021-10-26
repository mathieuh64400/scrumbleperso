import { Component, OnInit } from '@angular/core';
import { ReglesService } from '../../service/regles.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators} from '@angular/forms';
@Component({
  selector: 'app-reglescreate',
  templateUrl: './reglescreate.component.html',
  styleUrls: ['./reglescreate.component.css']
})
export class ReglescreateComponent implements OnInit {
  form:any=  FormGroup;
  constructor(public reglesService: ReglesService ,
    private router: Router ) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      titre: new FormControl('', [Validators.required]),
      contenu: new FormControl('', Validators.required),
      img:new FormControl('',Validators.required),
      texte:new FormControl('',Validators.required),
      video:new FormControl('',Validators.required),


    });
  }
     
  get f(){
    return this.form.controls;
  }
    
  submit(){
    console.log(this.form.value);
    this.reglesService.create(this.form.value).subscribe(res => {
         console.log('Event created successfully!');
         this.router.navigateByUrl('/regles');
    })
  }

}
