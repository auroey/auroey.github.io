import type { JSX } from 'react';

export interface Content {
  display: string;
}

export interface Button extends Content {
  name: string;
  ariaLabel: string;
  icon: JSX.Element;
  href: string;
}

export interface EducationItem {
  institution: string;
  detail: string;
  period: string;
}

export interface ProjectItem {
  name: string;
  description: string;
  href: string;
  tags: string[];
}

export interface PublicationItem {
  title: string;
  venue?: string;
  href?: string;
}

export interface Config {
  name: Content;
  title: Content;
  affiliation: Content;
  introduction: string[];
  researchFocus: string[];
  education: EducationItem[];
  projects: ProjectItem[];
  publications: PublicationItem[];
  buttons: Button[];
}
