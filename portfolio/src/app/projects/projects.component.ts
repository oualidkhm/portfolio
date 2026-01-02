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
    title: 'Plateforme NLP – Analyse de sentiments',
    description: 'Projet complet NLP avec interface Angular, API Flask, journalisation Spring Boot et Docker.',
    image: '../assets/nlp.png',
    video: 'https://youtu.be/FECMKpTLmjw',
    members: ['moi'],
    tools: ['Angular', 'Flask', 'Spring Boot', 'Python', 'Docker', 'MySQL','NLP']
  },
    {
      title: 'Projet Thales – Cloud, DevOps & Sécurité',
      description: 'Stage alterné chez Thales : Cloud, DevOps, sécurité et automatisation.',
      image: '../assets/thales.png',
      video: '../assets/notyet.mp4',
      members: ['moi'],
      tools: ['Terraform', 'GitLab CI/CD', 'Docker', 'Ansible']
    },
    {
      title: 'IA – Détection de maladies (Diabète, Cœur)',
      description: 'Modèle IA pour la prédiction de maladies chroniques.',
      image: '../assets/diaheart.png',
      video: '../assets/appML.mp4',
      members: ['moi'],
      tools: ['Python', 'Scikit-learn', 'Pandas', 'Jupyter']
    },
    {
      title: 'E-blog intelligent avec recommandation IA',
      description: 'Blog avec moteur de recommandation d’articles personnalisé.',
      image: '../assets/eblog.png',
      video: '../assets/notyet.mp4',
      members: ['moi'],
      tools: ['Angular', 'Python', 'Flask', 'Machine Learning']
    },
    {
      title: 'Plateforme étudiants-lauréats avec IA de filtrage de CV',
      description: 'Application de mise en relation avec UI/UX, IA et frontend Angular.',
      image: '../assets/laureat.png',
      video: '../assets/notyet.mp4',
      members: ['moi', '3 membres'],
      tools: ['Angular', 'Spring Boot', 'Python', 'Figma']
    },
    {
      title: 'Assistant vocal – Stage OCP 2024',
      description: 'Assistant vocal pour automatiser les tâches répétitives.',
      image: '../assets/assistant.png',
      video: '../assets/notyet.mp4',
      members: ['moi'],
      tools: ['Python', 'SpeechRecognition', 'Flask']
    },
    {
      title: 'Application de réservation de tickets en C',
      description: 'Application en C développée en équipe pour la gestion de tickets.',
      image: '../assets/cc.png',
      video: '../assets/C_p_.mp4',
      members: ['moi', '3 membres'],
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



