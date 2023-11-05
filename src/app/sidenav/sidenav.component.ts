import { Component, HostListener } from '@angular/core';
import * as AOS from 'aos';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent {
  faHouse=faHouse
  faUser =faUser
  faBriefcase=faBriefcase
  faEnvelope=faEnvelope
  ngOnInit(): void {
    AOS.init();
  }
}
