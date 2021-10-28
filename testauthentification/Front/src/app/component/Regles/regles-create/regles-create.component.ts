import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { ReglesService } from 'src/app/service/regles.service';
@Component({
  selector: 'app-regles-create',
  templateUrl: './regles-create.component.html',
  styleUrls: ['./regles-create.component.css']
})
export class ReglesCreateComponent implements OnInit {
  form:any= FormGroup;
  constructor(public reglesservice:ReglesService) { }

  ngOnInit(): void {
  }

}
