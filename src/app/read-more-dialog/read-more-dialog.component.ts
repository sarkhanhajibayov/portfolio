import { Component } from '@angular/core';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-read-more-dialog',
  templateUrl: './read-more-dialog.component.html',
  styleUrls: ['./read-more-dialog.component.scss'],
})
export class ReadMoreDialogComponent {
  images = [
        { source: '/assets/images/html5-logo.svg', alt: 'HTML5' },
        { source:  '/assets/images/css3-logo.svg', alt: 'CSS3' },
        { source: '/assets/images/javascript-logo.svg', alt: 'JavaScript' },
        { source: '/assets/images/bootstrap-logo.svg', alt: 'Bootstrap' },
        { source: '/assets/images/angular-logo.svg', alt: 'Angular' },
        { source: '/assets/images/c-sharp-logo.svg', alt: 'C#' },
        { source: '/assets/images/dotnet-logo.svg', alt: '.Net Core' },
        { source: '/assets/images/mySQL-server.svg', alt: 'MS SQL' },
        { source: '/assets/images/postgresql-logo.svg', alt: 'PostgreSQL' },
        { source: '/assets/images/postman-logo.svg', alt: 'Postman' },

      ];
  skills = [
    {
      name: 'English',
      percent: '90%',
      value: 90,
    },
    {
      name: 'Russian',
      percent: '90%',
      value: 90,
    },
    {
      name: 'Turkish',
      percent: '90%',
      value: 90,
    },
  ];
  softSkills = [
    {
      name: 'Communication',
      percent: '90%',
      value: 90,
    },
    {
      name: 'Problem-solving',
      percent: '85%',
      value: 85,
    },
    {
      name: 'Coding',
      percent: '80%',
      value: 80,
    },
  ];
  faXmark = faXmark;
}
