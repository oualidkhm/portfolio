import { Component } from '@angular/core';
import {NgForOf, NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  standalone: true,
  imports: [
    NgOptimizedImage,
    NgForOf
  ],
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {
   skills = [
    { name: 'Web Development', image: '../assets/html5.png', description: ' Angular | Spring Boot' },
    { name: 'Machine Learning', image: '../assets/html5.png', description: 'Model training, deployment (streamlit), Python (fastAPI,Flask)' },
    { name: 'Cloud & DevOps', image: '../assets/html5.png', description: 'Kubernetes, Docker, CI/CD, AWS' },
    { name: 'JavaScript', image: '../assets/html5.png', description: 'For web interactivity' },
    { name: 'Python', image: '../assets/html5.png', description: 'Data science, machine learning' },
    { name: 'Docker', image: '../assets/html5.png', description: 'Containerization platform' },
    { name: 'Kubernetes', image: '../assets/html5.png', description: 'Container orchestration' },
    { name: 'AWS', image: '../assets/html5.png', description: 'Scalable cloud services platform' }
  ];
}
