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
      image: '../assets/thales.png',
      video: '../assets/thales.png',
      members: ['Toi'],
      tools: ['Terraform', 'GitLab CI/CD', 'Docker', 'Ansible']
    },
    {
      title: 'IA – Détection de maladies (Diabète, Cœur)',
      description: 'Modèle IA pour la prédiction de maladies chroniques.',
      image: '../assets/diaheart.png',
      video: '../assets/thales.png',
      members: ['Toi'],
      tools: ['Python', 'Scikit-learn', 'Pandas', 'Jupyter']
    },
    {
      title: 'E-blog intelligent avec recommandation IA',
      description: 'Blog avec moteur de recommandation d’articles personnalisé.',
      image: '../assets/eblog.png',
      video: '../assets/thales.png',
      members: ['Toi'],
      tools: ['Angular', 'Python', 'Flask', 'Machine Learning']
    },
    {
      title: 'Plateforme étudiants-lauréats avec IA de filtrage de CV',
      description: 'Application de mise en relation avec UI/UX, IA et frontend Angular.',
      image: '../assets/laureat.png',
      video: '../assets/thales.png',
      members: ['Toi', 'Camarade 1', 'Camarade 2'],
      tools: ['Angular', 'Spring Boot', 'Python', 'Figma']
    },
    {
      title: 'Assistant vocal – Stage OCP 2024',
      description: 'Assistant vocal pour automatiser les tâches répétitives.',
      image: '../assets/assistant.png',
      video: '../assets/thales.png',
      members: ['Toi'],
      tools: ['Python', 'SpeechRecognition', 'Flask']
    },
    {
      title: 'Application de réservation de tickets en C',
      description: 'Application en C développée en équipe pour la gestion de tickets.',
      image: '../assets/cc.png',
      video: '../assets/thales.png',
      members: ['Toi', '3 membres'],
      tools: ['C', 'UML']
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
