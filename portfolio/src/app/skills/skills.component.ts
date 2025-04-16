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
    { name: 'Web Development', image: '../assets/devweb.png', description: ' Angular | Spring Boot }| HTML and CSS | JAVA ' },
    { name: 'Machine Learning', image: '../assets/ml.png', description: 'Model training, deployment (streamlit), Python (fastAPI,Flask)' },
    { name: 'Cloud & DevOps', image: '../assets/clouddevops.png', description: 'Kubernetes, Docker, CI/CD, AWS' },
    { name: 'JavaScript and data structures', image: '../assets/js.png', description: 'For web interactivity' },
    { name: 'Python and streamlit', image: '../assets/strpy.png', description: 'Data science, machine learning' },
    { name: 'Docker', image: '../assets/docker.png', description: 'Containerization platform' },
    { name: 'Kubernetes', image: '../assets/kubernetes.png', description: 'Container orchestration' },
    { name: 'AWS', image: '../assets/aws.png', description: 'Scalable cloud services platform' }
  ];
}
