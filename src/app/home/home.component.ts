import { Component, OnInit, ViewChild , AfterViewInit} from '@angular/core';
//import { VideoService } from '../services/video.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Observable } from 'rxjs';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { ChaptersComponent } from '../chapters/chapters.component';
import { Chapter } from '../models/chapter.model';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {
  @ViewChild(ChaptersComponent) chaptersComponent!: ChaptersComponent;

  introUrl: Observable<string> = new Observable<string>();
  safeIntroUrl: SafeResourceUrl = null!;

  welcome_a = "What would happen if someone became an expert on bugs only to get turned into a roach by a crazy scientist? Well, they survive their new world of course! Luckily that’s what John Roach finds out he’s good at!";
  welcome_b = "John Roach and the tales of the EntoVerse brings the joy of discovering backyard critters to a new generation, blending real ecosystems into the lore with hilarious antics, engaging action, and a compelling narrative.";
  
  constructor(private sanitizer : DomSanitizer, private storage: AngularFireStorage, private http: HttpClient) { }

  ngOnInit(){
    const filePath = "video/Main Comp Final.mp4";
    const videoRef = this.storage.ref(filePath);

    videoRef.getDownloadURL().subscribe(url => {
      this.introUrl = url;
      this.safeIntroUrl = this.sanitizer.bypassSecurityTrustResourceUrl(url);
    }, error => {
      console.error("Error retrieving video URL", error);
    })
  }

  ngAfterViewInit() {
    // Ensure chaptersComponent is available
    if (this.chaptersComponent) {
      console.log("ChaptersComponent is available");
    } else {
      console.error("ChaptersComponent is not available");
    }
  }

  openLatestChapter(): void {
    if (this.chaptersComponent) {
      console.log("opening latest chapter");
      this.chaptersComponent.openChapterByIndex(0);
    } else {
      console.error("ChaptersComponent is not available");
    }
  }
}
