import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chapters',
  templateUrl: './chapters.component.html',
  styleUrls: ['./chapters.component.scss']
})
export class ChaptersComponent implements OnInit {

  description = "Here you can catch up with John Roach and his latest adventures! Be sure to check back for new pages to drop!";
  constructor() { }

  ngOnInit(): void {
  }

  showChapter(){
    console.log("chapter is opening");
  }

}
