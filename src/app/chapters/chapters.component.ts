import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-chapters',
  templateUrl: './chapters.component.html',
  styleUrls: ['./chapters.component.scss']
})
export class ChaptersComponent implements OnInit {

  description = "Here you can catch up with John Roach and his latest adventures! Be sure to check back for new pages to drop!";
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get('assets/data-files/chapter-test.json').subscribe((data:any) => {
      this.chapters = data;
      console.log(data);
    });
  }

  chapters: any;

  showChapter(chapterNumber: any){
    console.log("chapter is opening");
  }

}
