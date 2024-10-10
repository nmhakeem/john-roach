import { NgModule } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { ChaptersComponent } from './chapters/chapters.component';
import { CharactersComponent } from './characters/characters.component';
import { AboutComponent } from './about/about.component';
import { GameComponent } from './game/game.component';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { ModalCharacterComponent } from './modal-character/modal-character.component';

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { environment } from '../environments/environment';

@NgModule({ declarations: [
        AppComponent,
        NavComponent,
        HomeComponent,
        ChaptersComponent,
        CharactersComponent,
        AboutComponent,
        //GameComponent,
        ModalCharacterComponent
    ],
    bootstrap: [AppComponent], 
    imports: [BrowserModule,
        AppRoutingModule,
        AngularFireModule.initializeApp(environment.firebaseConfig),
        AngularFireStorageModule], 
    providers: [Title, provideHttpClient(withInterceptorsFromDi())] })
export class AppModule { }
