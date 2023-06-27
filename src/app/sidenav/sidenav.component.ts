import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent {
  top: any;
  left: any;
  expand = false;
  @HostListener('document:click', ['$event'])
  onClick(event: Event) {
    this.expand = true;
    setTimeout(() => {
      this.expand = false;
    }, 500);
  }
  @HostListener('document:mousemove', ['$event'])
  onMousemove(event: MouseEvent) {
    this.top = event.pageY - 10 + 'px';
    this.left = event.pageX - 10 + 'px';
  }
}
