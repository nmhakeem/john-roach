import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  welcome_a = "What would happen if someone became an expert on bugs only to get turned into a roach by a crazy scientist? Well, they survive their new world of course! Luckily that’s what John Roach finds out he’s good at!";
  welcome_b = "John Roach and the tales of the EntoVerse brings the joy of discovering backyard critters to a new generation, blending real ecosystems into the lore with hilarious antics, engaging action, and a compelling narrative.";
  constructor() { }

  ngOnInit(): void {
  }

}
