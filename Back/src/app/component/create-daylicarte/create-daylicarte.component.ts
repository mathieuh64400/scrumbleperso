import { Component, OnInit } from '@angular/core';
import { Daylicarte } from '../../models/daylicarte';
import { DaylicarteService } from '../../service/daylicarte.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators} from '@angular/forms';
@Component({
  selector: 'app-create-daylicarte',
  templateUrl: './create-daylicarte.component.html',
  styleUrls: ['./create-daylicarte.component.css']
})
export class CreateDaylicarteComponent implements OnInit {
  form:any=  FormGroup;

  constructor( public daylicarteService: DaylicarteService ,
    private router: Router ) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      titre: new FormControl('', [Validators.required]),
      contenu: new FormControl('', Validators.required)
    });
  }
    
  get f(){
    return this.form.controls;
  }
    
  submit(){
    console.log(this.form.value);
    this.daylicarteService.create(this.form.value).subscribe(res => {
         console.log('Event created successfully!');
         this.router.navigateByUrl('/daylicarte');
    })
  }

}
