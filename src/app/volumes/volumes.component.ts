import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-volumes',
  templateUrl: './volumes.component.html',
  styleUrls: ['./volumes.component.scss']
})
export class VolumesComponent implements OnInit {

  description = "Here you can catch up with John Roach and his latest adventures! Be sure to check back for new pages to drop!";
  constructor() { }

  ngOnInit(): void {
  }

  showVolume(){
    console.log("volume is opening");
  }

}
