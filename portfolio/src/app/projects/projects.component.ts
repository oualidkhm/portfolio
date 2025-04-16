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
      title: 'Projet Thales – Cloud, DevOps & Sécurité',
      description: 'Stage alterné chez Thales : Cloud, DevOps, sécurité et automatisation.',
      image: '../assets/cloud.png',
      video: '../assets/v3.mp4',
      members: ['Toi'],
      tools: ['Terraform', 'GitLab CI/CD', 'Docker', 'Ansible']
    },
    {
      title: 'IA – Détection de maladies (Diabète, Cœur)',
      description: 'Modèle IA pour la prédiction de maladies chroniques.',
      image: '../assets/health.png',
      video: '../assets/v3.mp4',
      members: ['Toi'],
      tools: ['Python', 'Scikit-learn', 'Pandas', 'Jupyter']
    },
    {
      title: 'E-blog intelligent avec recommandation IA',
      description: 'Blog avec moteur de recommandation d’articles personnalisé.',
      image: '../assets/blog.png',
      video: '../assets/v3.mp4',
      members: ['Toi'],
      tools: ['Angular', 'Python', 'Flask', 'Machine Learning']
    },
    {
      title: 'Plateforme étudiants-lauréats avec IA de filtrage de CV',
      description: 'Application de mise en relation avec UI/UX, IA et frontend Angular.',
      image: '../assets/recruitment.png',
      video: '../assets/v3.mp4',
      members: ['Toi', 'Camarade 1', 'Camarade 2'],
      tools: ['Angular', 'Spring Boot', 'Python', 'Figma']
    },
    {
      title: 'Assistant vocal – Stage OCP 2024',
      description: 'Assistant vocal pour automatiser les tâches répétitives.',
      image: '../assets/voice.png',
      video: '../assets/v3.mp4',
      members: ['Toi'],
      tools: ['Python', 'SpeechRecognition', 'Flask']
    },
    {
      title: 'Application de réservation de tickets en C',
      description: 'Application en C développée en équipe pour la gestion de tickets.',
      image: '../assets/c-program.png',
      video: '../assets/v3.mp4',
      members: ['Toi', '3 membres'],
      tools: ['C', 'Makefile']
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
