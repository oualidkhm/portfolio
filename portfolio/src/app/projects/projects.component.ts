import { Component } from '@angular/core';
import {NgForOf, NgIf} from '@angular/common';
import {DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';

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
  projects = [{
    title: 'NLP Platform – Sentiment Analysis',
    description: 'End-to-end NLP project with Angular interface, Flask API, Spring Boot logging, and Docker.',
    image: '../assets/nlp.png',
    video: 'https://youtu.be/FECMKpTLmjw',
    members: ['me'],
    tools: ['Angular', 'Flask', 'Spring Boot', 'Python', 'Docker', 'MySQL','NLP']
  },
    {
      title: 'Thales Project – Cloud, DevOps & Security',
      description: 'Apprenticeship at Thales focused on Cloud, DevOps, security, and automation.',
      image: '../assets/thales.png',
      video: '../assets/notyet.mp4',
      members: ['me'],
      tools: ['Terraform', 'GitLab CI/CD', 'Docker', 'Ansible']
    },
    {
      title: 'AI – Disease Detection (Diabetes, Heart)',
      description: 'AI model for predicting chronic diseases.',
      image: '../assets/diaheart.png',
      video: '../assets/appML.mp4',
      members: ['me'],
      tools: ['Python', 'Scikit-learn', 'Pandas', 'Jupyter']
    },
    {
      title: 'Smart E-Blog with AI Recommendations',
      description: 'Blog platform with a personalized article recommendation engine.',
      image: '../assets/eblog.png',
      video: '../assets/notyet.mp4',
      members: ['me'],
      tools: ['Angular', 'Python', 'Flask', 'Machine Learning']
    },
    {
      title: 'Student–Graduate Platform with AI CV Filtering',
      description: 'Networking platform with UI/UX design, AI-based CV filtering, and Angular frontend.',
      image: '../assets/laureat.png',
      video: '../assets/notyet.mp4',
      members: ['me', '3 members'],
      tools: ['Angular', 'Spring Boot', 'Python', 'Figma']
    },
    {
      title: 'Voice Assistant – OCP Internship 2024',
      description: 'Voice assistant designed to automate repetitive tasks.',
      image: '../assets/assistant.png',
      video: '../assets/notyet.mp4',
      members: ['me'],
      tools: ['Python', 'SpeechRecognition', 'Flask']
    },
    {
      title: 'Ticket Reservation Application in C',
      description: 'Team-developed C application for ticket management.',
      image: '../assets/cc.png',
      video: '../assets/C_p_.mp4',
      members: ['me', '3 members'],
      tools: ['C', 'UML']
    }
  ];


  selectedVideo: string | null = null;
  safeVideoUrl: SafeResourceUrl | null = null;

  constructor(private sanitizer: DomSanitizer) {}

  openVideo(videoUrl: string) {
    this.selectedVideo = videoUrl;
    if (videoUrl.includes('youtube.com') || videoUrl.includes('youtu.be')) {
      // Extract video ID and convert to embed URL
      let videoId = '';
      if (videoUrl.includes('youtu.be')) {
        videoId = videoUrl.split('/').pop()!;
      } else if (videoUrl.includes('watch?v=')) {
        videoId = videoUrl.split('watch?v=')[1].split('&')[0];
      }
      const embedUrl = `https://www.youtube.com/embed/${videoId}`;
      this.safeVideoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(embedUrl);
    } else {
      this.safeVideoUrl = null; // local video
    }
  }


  closeVideo() {
    this.selectedVideo = null;
  }
}



