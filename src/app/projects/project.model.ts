export class Project {
  public name: string;
  public imagePath: string;
  public technologies: string[];
  public gitUrl: string;
  public siteUrl: string;
  constructor(
    name: string,
    imagePath: string,
    technologies: string[],
    gitUrl: string,
    siteUrl: string
  ) {
    this.name = name;
    this.imagePath = imagePath;
    this.technologies = technologies;
    this.gitUrl = gitUrl;
    this.siteUrl = siteUrl;
  }
}
