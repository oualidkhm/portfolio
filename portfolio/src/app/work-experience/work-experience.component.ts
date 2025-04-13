import { Component } from '@angular/core';
import {NgForOf, NgIf} from '@angular/common';

interface WorkExperience {
  logoUrl: string;
  jobTitle: string;
  companyName: string;
  period: string;
  roleDescription: string;
  projects: string[];
  impact: string;
  skills: string[];
  testimonial?: string;
  link: string;
}

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  standalone: true,
  imports: [
    NgForOf,
    NgIf
  ],
  styleUrls: ['./work-experience.component.css']
})
export class WorkExperienceComponent {
  workExperiences: WorkExperience[] = [
    {
      logoUrl: '../assets/html5.png',
      jobTitle: 'Full-Stack Developer',
      companyName: 'Tech Innovations Inc.',
      period: 'Jan 2020 - Present',
      roleDescription: 'Developing and maintaining scalable web applications.',
      projects: ['Project A (React, Node.js)', 'Project B (Angular, Firebase)'],
      impact: 'Improved performance by 40%',
      skills: ['Angular', 'Node.js', 'JavaScript'],
      testimonial: '“An excellent developer who always exceeds expectations.” – John Doe, CEO',
      link: 'https://github.com/username/projectA'
    },
    {
      logoUrl: '../assets/html5.png',
      jobTitle: 'Software Engineer',
      companyName: 'Creative Solutions',
      period: 'Jun 2018 - Dec 2019',
      roleDescription: 'Worked on building cloud-based services and APIs.',
      projects: ['Project X (AWS, Docker)', 'Project Y (Go, MongoDB)'],
      impact: 'Reduced system downtimes by 25%',
      skills: ['AWS', 'Docker', 'Go'],
      testimonial: '“A talented engineer with exceptional problem-solving skills.” – Jane Smith, CTO',
      link: 'https://github.com/username/projectX'
    }
  ];
}
