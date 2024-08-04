import { Component, OnInit } from '@angular/core';
//import { VideoService } from '../services/video.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  introUrl = 'https://www.youtube.com/embed/sck2HIcYY1A';
  safeIntroUrl: SafeResourceUrl = null!;

  welcome_a = "What would happen if someone became an expert on bugs only to get turned into a roach by a crazy scientist? Well, they survive their new world of course! Luckily that’s what John Roach finds out he’s good at!";
  welcome_b = "John Roach and the tales of the EntoVerse brings the joy of discovering backyard critters to a new generation, blending real ecosystems into the lore with hilarious antics, engaging action, and a compelling narrative.";
  
  constructor(private sanitizer : DomSanitizer) { }

  ngOnInit(){
    /*this.videoService.getVideoUrl('/video/JR Intro - Watermark.mp4')
    .then(url => this.introUrl = url)
    .catch(error => console.error('could not get the video url', error));*/
    this.safeIntroUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.introUrl);
  }

}
