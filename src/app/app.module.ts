import { NgModule } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { ChaptersComponent } from './chapters/chapters.component';
import { CharactersComponent } from './characters/characters.component';
import { AboutComponent } from './about/about.component';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { ModalCharacterComponent } from './modal-character/modal-character.component';

/*import { AngularFireModule } from '@angular/fire';
import { AngularFireStorageModule } from '@angular/fire/storage';*/
import { environment } from '../environments/environment';

@NgModule({ declarations: [
        AppComponent,
        NavComponent,
        HomeComponent,
        ChaptersComponent,
        CharactersComponent,
        AboutComponent,
        ModalCharacterComponent
    ],
    bootstrap: [AppComponent], imports: [BrowserModule,
        AppRoutingModule], providers: [Title, provideHttpClient(withInterceptorsFromDi())] })
export class AppModule { }
