import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import * as AOS from 'aos';
import { ReadMoreDialogComponent } from '../read-more-dialog/read-more-dialog.component';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent {
  constructor(private dialog: MatDialog) {}
  ngOnInit(): void {
    AOS.init({ once: true });
  }

  onReadMore() {
    this.dialog.open(ReadMoreDialogComponent, {
      width: '900px',
    });
  }
}
