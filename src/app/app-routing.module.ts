import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { CharactersComponent } from './characters/characters.component';
import { HomeComponent } from './home/home.component';
import { VolumesComponent } from './volumes/volumes.component';

const routes: Routes = [
  { path: '', component: HomeComponent, data: {title: "John Roach - Home"}},
  { path: 'characters', component: CharactersComponent, data: {title: "John Roach - Characters"}},
  { path: 'volumes', component: VolumesComponent, data: {title: "John Roach - Volumes"}},
  { path: 'about', component: AboutComponent, data: {title: "John Roach - About"}}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
