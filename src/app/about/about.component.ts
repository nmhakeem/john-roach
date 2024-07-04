import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  about_a = "I’ve always enjoyed documentaries, especially those about nature and its inhabitants. My love for animation and storytelling made creating this project a natural fit. I figured that the incredible world of insects would be the perfect backdrop for a story about self-worth, the meaning of family, and forging your own path.";
  about_b = "Insects have been around for almost 500 million years – that says something! From camouflage and super-strength to flight and acid projection, their abilities are like those of comic book characters. In the EntoVerse, these extraordinary powers come to life in ways you’ve never seen before.";
  constructor() { }

  ngOnInit(): void {
  }

}
