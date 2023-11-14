import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import * as AOS from 'aos';
import { ReadMoreDialogComponent } from '../read-more-dialog/read-more-dialog.component';
import { AboutService } from './about.service';
import { About } from './about.model';
import { ConfirmationDialogComponent } from '../confirmation-dialog/confirmation-dialog.component';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent {
  about!: About;
  birthDate: any;
  age: any;
  day: any;
  month: any;
  year: any;

  constructor(private dialog: MatDialog, private aboutService: AboutService) {}

  ngOnInit(): void {
    AOS.init({ once: true });
    this.getAbout();
  }

  onReadMore() {
    this.dialog.open(ReadMoreDialogComponent, {
      width: '900px',
    });
  }

  getAbout() {
    this.aboutService.getAbout().subscribe((res) => {
      if (res) {
        this.about = res;
        this.birthDate = res.birthDate;
        [this.day, this.month, this.year] = this.birthDate!.split('.');
        const birthDate = new Date(this.year, this.month - 1, this.day);
        const currentDate = new Date();
        this.age = currentDate.getFullYear() - birthDate.getFullYear();
      }
    });
  }
}
