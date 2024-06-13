import { Component, OnInit , HostListener } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  
  isShow: boolean = Boolean();
  mobile: boolean = Boolean();
  screenWdith: any;

  constructor() { }

  showDetails(){
    console.log("button test");
    this.isShow = !this.isShow;
    if(this.isShow){
      console.log("this mf true");
    }
  }

  ngOnInit(): void {
    this.screenWdith = window.innerWidth;
    this.mobile = false;
    console.log("normal size");
    this.testMethod();
    if (window.screen.width <= 960) { // 768px portrait
      console.log("mobile size now");
      this.mobile = true;
    }
  }

  testMethod(){

  }

}
