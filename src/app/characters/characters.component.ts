import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit {

  description = "See who all inhabits the EntoVerse!";
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  this.http.get('assets/data-files/character-test.json').subscribe((data:any) => {
      this.characters = data;
      console.log(data);
    });
  }
  
  characters: any;
  selectedCharacter: any;

  showCharacter(character: any) {
    this.selectedCharacter = character;
  }
}
