import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Observable } from 'rxjs';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { Chapter, Page } from '../models/chapter.model';

@Component({
  selector: 'app-chapters',
  templateUrl: './chapters.component.html',
  styleUrls: ['./chapters.component.scss']
})
export class ChaptersComponent implements OnInit {

  description = "Here you can catch up with John Roach and his latest adventures! Be sure to check back for new pages to drop!";
  chapters: any[] = [];
  selectedChapter: any;
  safeIntroUrl: SafeResourceUrl = null!;
  
  constructor(private http: HttpClient, 
              private sanitizer: DomSanitizer, 
              private storage: AngularFireStorage) { }

  ngOnInit(): void {
    const filePath = "img/comic/test/Molting_Point_1.jpg";
    const comicRef = this.storage.ref(filePath);

    comicRef.getDownloadURL().subscribe(url => {
      this.safeIntroUrl = this.sanitizer.bypassSecurityTrustResourceUrl(url);
    }, error => {
      console.error("naim error retrieivng comic")
    })

    this.http.get<Chapter[]>('assets/data-files/chapters.json').subscribe((data: Chapter[]) => {
      this.chapters = data;
      this.chapters.forEach(chapter => {
        chapter.pages.forEach((page: Page) => {
          const ref = this.storage.ref(page.source);
          console.log(ref);
          ref.getDownloadURL().subscribe(url => {
            console.log("this is the url");
            console.log(url);
            page.safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(url);
          });
        });
      });
      console.log(this.chapters);
    });
  }

  showChapter(chapter: any){
    console.log("chapter is opening");
    console.log(chapter);
    document.body.classList.add('modal-open');
    this.selectedChapter = chapter;
  }

  closeModal() {
    this.selectedChapter = null;
    document.body.classList.remove('modal-open');
    console.log("closing modal");
  }

}
