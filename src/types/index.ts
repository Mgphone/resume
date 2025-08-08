export interface ProjectDetail {
  title: string;
  description: string;
}

export interface Project {
  id: number;
  title: string;
  img: string;
  language: string[];
  weblink: string;
  sourcecode?: string;
  project_details: ProjectDetail[];
}