import { Injectable } from '@angular/core';
import { Project } from './project.model';

@Injectable({
  providedIn: 'root',
})
export class ProjectsService {
  projects: Project[] = [
    new Project(
      'DoxMake',
      'assets/image.png',
      ['HTML', 'CSS', 'TypeScript', 'Angular', 'Firebase'],
      'https://doxmake.com/home',
      'https://github.com/mizanacademy/document-converter-site'
    ),
    new Project(
      'BillKill',
      'assets/billkill.png',
      ['HTML', 'CSS', 'TypeScript', 'Angular', '.NET Core'],
      'https://billkill.az/home',
      'https://github.com/devx-az/billkill-subscriber-frontend'
    ),
    new Project(
      'MB-Securities',
      'assets/MB-Securities.png',
      ['HTML', 'CSS', 'TypeScript', 'Angular', '.NET Core'],
      '',
      ''
    ),
    new Project(
      'Sneakers Store',
      'assets/sneakers.png',
      ['HTML', 'CSS', 'TypeScript', 'Angular', '.NET Core'],
      '',
      ''
    ),
  ];
  constructor() {}

  getProjects() {
    return this.projects.slice();
  }
}
