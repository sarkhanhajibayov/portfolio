import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import * as AOS from 'aos';
import { ConfirmationDialogComponent } from '../confirmation-dialog/confirmation-dialog.component';
import { MatDialog } from '@angular/material/dialog';
interface MarkerProperties {
  position: {
    lat: number;
    lng: number;
  };
}
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
  hide = true;

  center: google.maps.LatLngLiteral = { lat: 40.369259, lng: 50.03041 };
  zoom = 13;

  marker: MarkerProperties = { position: { lat: 40.369259, lng: 50.03041 } }; // Eiffel Tower
  constructor(private fb: FormBuilder, private dialog: MatDialog) {}
  mainForm = this.fb.group({
    fullName: ['', [Validators.required]],
    phone: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    message: ['', Validators.required],
  });
  ngOnInit(): void {
    AOS.init();
  }

  onSubmit() {
    console.log(this.mainForm);
    this.dialog.open(ConfirmationDialogComponent, {
      data: {
        form: this.mainForm.value,
      },
    });
  }
}
