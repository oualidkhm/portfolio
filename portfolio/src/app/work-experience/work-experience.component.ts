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
      logoUrl: '../assets/thales.png',
      jobTitle: 'DevOps & Cloud Intern',
      companyName: 'Thales (France)',
      period: '2025 (en cours)',
      roleDescription: 'Participation à un projet cloud avec intégration de pratiques DevOps, sécurité et automatisation.',
      projects: ['Projet Cloud & DevOps (Kubernetes, Docker)', 'Automatisation CI/CD'],
      impact: 'Amélioration de l’intégration continue et déploiement sécurisé.',
      skills: ['Cloud', 'DevOps', 'Docker', 'Sécurité', 'Automation'],
      testimonial: '“Un jeune ingénieur très curieux et impliqué dans l’innovation.”',
      link: 'https://oualidkhmaich.vercel.app/'
    },
    {
      logoUrl: '../assets/assistant.png',
      jobTitle: 'IA Intern',
      companyName: 'OCP Group',
      period: 'Été 2024',
      roleDescription: 'Création d’un assistant vocal pour automatiser des tâches répétitives.',
      projects: ['Assistant Vocal (Speech Recognition, Python)'],
      impact: 'Réduction du temps de traitement pour les tâches récurrentes.',
      skills: ['Python', 'IA', 'Automatisation'],
      testimonial: '“Oualid a proposé des solutions innovantes pour les besoins internes.”',
      link: 'https://oualidkhmaich.vercel.app/'
    },
    {
      logoUrl: '../assets/diaheart.png',
      jobTitle: 'AI Developer',
      companyName: 'Projet Personnel EMI',
      period: '2024',
      roleDescription: 'Développement d’un modèle IA pour détecter le diabète et les maladies cardiaques.',
      projects: ['Modèle de classification (Sklearn, Pandas, Matplotlib)'],
      impact: 'Amélioration de la précision de détection des maladies.',
      skills: ['Machine Learning', 'Python', 'Pandas'],
      testimonial: '“Un projet médical très prometteur au service de la prévention.”',
      link: 'https://oualidkhmaich.vercel.app/'
    },
    {
      logoUrl: '../assets/laureat.png',
      jobTitle: 'Fullstack & AI Developer',
      companyName: 'Projet Étudiant EMI',
      period: '2024',
      roleDescription: 'Développement d’une plateforme étudiants-lauréats avec filtrage de CV basé sur IA.',
      projects: ['Plateforme Web (Angular, Spring Boot)', 'IA de filtrage (FastAPI)'],
      impact: 'Optimisation du recrutement étudiant grâce à l’IA.',
      skills: ['Angular', 'Spring Boot', 'FastAPI', 'Figma'],
      testimonial: '“Un travail structuré et très pertinent dans le domaine du recrutement.”',
      link: 'https://oualidkhmaich.vercel.app/'
    }
  ];

}
