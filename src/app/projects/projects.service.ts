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
      'DocxMake',
      'assets/image.png',
      ['HTML', 'CSS', 'TypeScript', 'Angular', 'Firebase'],
      'https://doxmake.com/home',
      'https://github.com/mizanacademy/document-converter-site'
    ),
  ];
  constructor() {}

  getProjects() {
    return this.projects.slice();
  }
}
