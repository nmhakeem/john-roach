import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router, NavigationEnd, ActivatedRoute, ChildActivationEnd } from '@angular/router';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  constructor(private titleService: Title,
              private router: Router,
              private activatedRoute: ActivatedRoute) { }
  
  setDocTitle(title: string) {
    this.titleService.setTitle(title);
  }

  ngOnInit() {
    const appTitle = this.titleService.getTitle();
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd || event instanceof ChildActivationEnd),
      map(() => {
        const child = this.activatedRoute.firstChild;
        if(child && child.snapshot.data['title']) {
          return child.snapshot.data['title'];
        }
        return appTitle;
      })
    ).subscribe((ttl: string) => {
      this.titleService.setTitle(ttl);
    })
  }
}
