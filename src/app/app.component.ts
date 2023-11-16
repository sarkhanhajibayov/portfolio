import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
// import { fader } from './route-animations';
import { from } from 'rxjs';
import { RouterOutlet } from '@angular/router';
import * as AOS from 'aos';
import { MatDrawer } from '@angular/material/sidenav';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  // animations: [fader],
})
export class AppComponent {
  title = 'portfolio';
  top: any;
  left: any;
  expand = false;
  isMobile: boolean | undefined;
  @ViewChild('drawer', {}) drawer: MatDrawer | undefined;

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
    this.isMobile = window.matchMedia('(max-width: 1200px)').matches;
    AOS.init();
  }

  onResize(event: any) {
    this.isMobile = window.matchMedia('(max-width:1200px)').matches;

  }
  @HostListener('document:mousemove', ['$event'])
  onMousemove(event: MouseEvent) {
    this.top = event.pageY - 10 + 'px';
    this.left = event.pageX - 10 + 'px';
  }
}
