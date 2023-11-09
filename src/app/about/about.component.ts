import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import * as AOS from 'aos';
import { ReadMoreDialogComponent } from '../read-more-dialog/read-more-dialog.component';
import { AboutService } from './about.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent {
  about = [];
  constructor(private dialog: MatDialog, private aboutService: AboutService) {}

  ngOnInit(): void {
    AOS.init({ once: true });
    this.getAbout();
  }

  onReadMore() {
    this.dialog.open(ReadMoreDialogComponent, {
      width: '900px',
      autoFocus: true,
    });
  }

  getAbout() {
    this.aboutService.getAbout().subscribe((res) => {
      console.log(res);
      this.about = res;
      console.log(this.about);
    });
  }
}
