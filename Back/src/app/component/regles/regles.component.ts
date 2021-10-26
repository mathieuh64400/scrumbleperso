import { Component, OnInit } from '@angular/core';
import { Regles } from '../../models/regles';
import { ReglesService} from '../../service/regles.service';
@Component({
  selector: 'app-regles',
  templateUrl: './regles.component.html',
  styleUrls: ['./regles.component.css']
})
export class ReglesComponent implements OnInit {
   regles :Regles[] = [];
  constructor(public reglesService: ReglesService) { }

  ngOnInit(): void {
    this.reglesService.getAll().subscribe((data: Regles[])=>{
      this.regles = data;
      console.log(this.regles);
    })  
  }
  deleteRegles(_id?:string){
    if (!_id) return
    this.reglesService.delete(_id).subscribe(res => {
         this.regles = this.regles.filter(item => item._id !== _id);
         console.log('Post deleted successfully!');
    })
  }

}
