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
  
  chapters = [
    {
        "chapterNumber": 1,
        "title": "Pilot",
        "description": "John Roach appears in the EntoVerse! How will he measure up to this world?"
    },
    {
        "chapterNumber": 2,
        "title": "Danger Ahead!",
        "description": "With newfound trust of the locals, John Roach faces a threat head on!"
    },
    {
        "chapterNumber": 3,
        "title": "The Scarab King",
        "description": "A new foe rallies against John Roach, can he thwart them?"
    }
  ];

  showChapter(chapterNumber: any){
    console.log("chapter is opening");
  }

}
