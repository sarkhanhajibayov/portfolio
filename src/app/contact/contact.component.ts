import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import * as AOS from 'aos';
interface MarkerProperties {
  position: {
    lat: number;
    lng: number;
  }
};
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
  hide = true;
  unamePattern = '^[a-z0-9_-]{8,15}$';
  pwdPattern = '^(?=.*d)(?=.*[a-z])(?=.*[A-Z])(?!.*s).{6,12}$';
  mobnumPattern = '^((\\+91-?)|0)?[0-9]{10}$';
  emailPattern = '^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$';
  center: google.maps.LatLngLiteral = { lat: 40.369259, lng:50.030410 };
  zoom = 13

  marker: MarkerProperties = 
    { position: { lat: 40.369259, lng: 50.030410 }}// Eiffel Tower
  ;
  constructor(private fb: FormBuilder) {}
  mainForm = this.fb.group({
    fullName: ['', [Validators.required]],
    phone: ['', [Validators.required]],
    email: ['', [Validators.required]],
    message: ['', Validators.required],
  });
  ngOnInit(): void {
    AOS.init();
  }
}
