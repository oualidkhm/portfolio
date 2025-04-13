import { Component } from '@angular/core';
import {NgForOf, NgIf} from '@angular/common';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  standalone: true,
  imports: [
    NgIf,
    NgForOf
  ],
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  projects = [
    {
      title: 'AI Chatbot',
      description: 'An AI-powered chatbot for customer support.',
      image: '../assets/js.png',
      video: '../assets/v3.mp4',
      members: ['Alice', 'Bob', 'Charlie'],
      tools: ['Angular', 'TensorFlow', 'Node.js']
    },
    {
      title: 'E-commerce Platform',
      description: 'A full-featured online shopping platform.',
      image: '../assets/html5.png',
      video: '../assets/v3.mp4',
      members: ['David', 'Eve', 'Frank'],
      tools: ['Angular', 'Spring Boot', 'MySQL']
    },
    {
      title: 'Finance Dashboard',
      description: 'A dashboard to visualize financial data.',
      image: '../assets/js.png',
      video: '../assets/v3.mp4',
      members: ['Grace', 'Hank', 'Ivy'],
      tools: ['Angular', 'D3.js', 'MongoDB']
    }
  ];

  selectedVideo: string | null = null;

  openVideo(videoUrl: string) {
    this.selectedVideo = videoUrl;
  }

  closeVideo() {
    this.selectedVideo = null;
  }
}
