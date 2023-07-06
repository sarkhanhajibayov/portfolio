import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { fader } from './route-animations';
import { from } from 'rxjs';
import { RouterOutlet } from '@angular/router';
import * as AOS from 'aos';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [fader],
})
export class AppComponent {
  title = 'portfolio';
  top: any;
  left: any;
  expand = false;

  constructor() {}
  @HostListener('document:click', ['$event'])
  onClick(event: Event) {
    this.expand = true;
    setTimeout(() => {
      this.expand = false;
    }, 500);
  }
  prepareRoute(outlet: RouterOutlet) {
    return (
      outlet &&
      outlet.activatedRouteData &&
      outlet.activatedRouteData['animation']
    );
  }
  ngOnInit(): void {
    AOS.init();
  }
}
