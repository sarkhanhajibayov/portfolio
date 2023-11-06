import { Component } from '@angular/core';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-read-more-dialog',
  templateUrl: './read-more-dialog.component.html',
  styleUrls: ['./read-more-dialog.component.scss'],
})
export class ReadMoreDialogComponent {
  images = [
        { source: '/assets/html5.svg', alt: 'HTML5' },
        { source:  '/assets/css3.svg', alt: 'CSS3' },
        { source: '/assets/javascript.svg', alt: 'JavaScript' },
        { source: '/assets/bootstrap.svg', alt: 'Bootstrap' },
        { source: '/assets/angular.svg', alt: 'Angular' },
        { source: '/assets/c-sharp-logo.svg', alt: 'C#' },
        { source: '/assets/dotnet.svg', alt: '.Net Core' },
        { source: '/assets/mySQL-server.svg', alt: 'MS SQL' },
        { source: '/assets/postgresql-logo.svg', alt: 'PostgreSQL' },
        { source: '/assets/postman-logo.svg', alt: 'Postman' },

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
