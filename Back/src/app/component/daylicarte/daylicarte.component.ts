import { Component, OnInit } from '@angular/core';
import { Daylicarte } from '../../models/daylicarte';
import { DaylicarteService } from '../../service/daylicarte.service';
@Component({
  selector: 'app-daylicarte',
  templateUrl: './daylicarte.component.html',
  styleUrls: ['./daylicarte.component.css']
})
export class DaylicarteComponent implements OnInit {
  daylicarte: Daylicarte[] = [];
  constructor(public daylicarteService: DaylicarteService) { }

  ngOnInit(): void {
    this.daylicarteService.getAll().subscribe((data: Daylicarte[])=>{
      this.daylicarte = data;
      console.log(this.daylicarte);
    })  
  }
  deleteDaylicarte(_id?:string){
    if (!_id) return
    this.daylicarteService.delete(_id).subscribe(res => {
         this.daylicarte = this.daylicarte.filter(item => item._id !== _id);
         console.log('Post deleted successfully!');
    })
  }

}
