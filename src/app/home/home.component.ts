import { Component, OnInit } from '@angular/core';
//import { VideoService } from '../services/video.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Observable } from 'rxjs';
import { AngularFireStorage } from '@angular/fire/compat/storage';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  introUrl: Observable<string> = new Observable<string>();
  safeIntroUrl: SafeResourceUrl = null!;

  welcome_a = "What would happen if someone became an expert on bugs only to get turned into a roach by a crazy scientist? Well, they survive their new world of course! Luckily that’s what John Roach finds out he’s good at!";
  welcome_b = "John Roach and the tales of the EntoVerse brings the joy of discovering backyard critters to a new generation, blending real ecosystems into the lore with hilarious antics, engaging action, and a compelling narrative.";
  
  constructor(private sanitizer : DomSanitizer, private storage: AngularFireStorage) { }

  ngOnInit(){
    /*this.videoService.getVideoUrl('/video/JR Intro - Watermark.mp4')
    .then(url => this.introUrl = url)
    .catch(error => console.error('could not get the video url', error));*/
    const filePath = "video/Main Comp Final.mp4";
    const videoRef = this.storage.ref(filePath);

    videoRef.getDownloadURL().subscribe(url => {
      this.introUrl = url;
      this.safeIntroUrl = this.sanitizer.bypassSecurityTrustResourceUrl(url);
    }, error => {
      console.error("naim error retrieivng")
    })

    /*this.introUrl = videoRef.getDownloadURL();

    this.introUrl.subscribe(
      url => {
        console.log('Video URL:', url);  // Logs the URL to the console
      },
      error => {
        console.error('Error fetching video URL:', error);  // Logs error if something goes wrong
      }
    );*/
  }

}
