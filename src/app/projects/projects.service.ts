import { Injectable } from '@angular/core';
import { Project } from './project.model';

@Injectable({
  providedIn: 'root',
})
export class ProjectsService {
  projects: Project[] = [
    new Project(
      'DoxMake',
      'assets/images/doxmake.png',
      ['HTML', 'CSS', 'TypeScript', 'Angular', 'Firebase'],
      'https://doxmake.com/home',
      'https://github.com/mizanacademy/document-converter-site'
    ),
    new Project(
      'BillKill',
      'assets/images/billkill.png',
      ['HTML', 'CSS', 'TypeScript', 'Angular', '.NET Core'],
      'https://billkill.az/home',
      'https://github.com/devx-az/billkill-subscriber-frontend'
    ),
    new Project(
      'MB-Securities',
      'assets/images/securities.png',
      ['HTML', 'CSS', 'TypeScript', 'Angular', '.NET Core'],
      '',
      ''
    ),
    new Project(
      'Sneakers Store',
      'assets/images/sneakers.png',
      ['HTML', 'CSS', 'TypeScript', 'Angular', '.NET Core'],
      '',
      ''
    ),
    new Project(
      'Moto Sale',
      'assets/images/motosale.png',
      ['HTML', 'CSS', 'TypeScript', 'Angular', '.NET Core'],
      'https://github.com/Hajibayov/Moto-Sale',
      'https://hajibayov.github.io/Moto-Sale/Home'
    ),
  ];
  constructor() {}

  getProjects() {
    return this.projects.slice();
  }
}
