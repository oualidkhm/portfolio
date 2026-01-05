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
      logoUrl: '../assets/chu.png',
      jobTitle: 'Deep Learning Intern (Healthcare)',
      companyName: 'CHU Ibn Sina – Rabat',
      period: 'Summer Internship',
      roleDescription: 'Developed and optimized a deep learning model for ophthalmologic disease detection using medical imaging.',
      projects: [
        'Ophthalmology Disease Detection (CNN, Neural Networks)',
        'Web Application for Model Inference (Angular, Flask)'
      ],
      impact: 'Achieved strong model optimization and delivered an end-to-end solution enabling real-time interaction with the AI model.',
      skills: [
        'Deep Learning',
        'CNN',
        'Keras',
        'Scikit-learn',
        'Image Processing',
        'Angular',
        'Flask',
        'Google Colab',
        'Healthcare Understanding',
        'Storytelling'
      ],
      testimonial: '“A solid AI project combining technical excellence with real healthcare impact.”',
      link: 'https://oualidkhmaich.vercel.app/'
    },
    {
      logoUrl: '../assets/rag.png',
      jobTitle: 'AI Apprenticeship – RAG Systems',
      companyName: 'In collaboration with an AI PhD Researcher',
      period: 'Apprenticeship',
      roleDescription: 'Designed and implemented a Retrieval-Augmented Generation (RAG) system for engineering training within an educational institution.',
      projects: [
        'RAG System for Engineering Education',
        'Knowledge Retrieval & Semantic Search'
      ],
      impact: 'Enabled intelligent access to educational content through embeddings and LLM-powered retrieval.',
      skills: [
        'RAG',
        'LangChain',
        'Embeddings',
        'LLMs','NLP',
        'AI Systems Design'
      ],
      testimonial: '“Strong collaboration skills and a clear understanding of modern AI architectures.”',
      link: 'https://oualidkhmaich.vercel.app/'
    },

    {
      logoUrl: '../assets/thales.png',
      jobTitle: 'Cloud & DevOps Intern',
      companyName: 'Thales (France)',
      period: '2025 (ongoing)',
      roleDescription: 'Contributed to a cloud-based project by implementing DevOps practices, security, and infrastructure automation.',
      projects: [
        'Cloud & DevOps Project (Kubernetes, Docker)',
        'CI/CD Pipeline Automation'
      ],
      impact: 'Improved continuous integration workflows and enabled secure, automated deployments.',
      skills: ['Cloud Computing', 'DevOps', 'Docker', 'Security', 'Automation'],
      testimonial: '“A highly motivated and curious engineer with a strong passion for innovation.”',
      link: 'https://oualidkhmaich.vercel.app/'
    },
    {
      logoUrl: '../assets/assistant.png',
      jobTitle: 'AI Intern',
      companyName: 'OCP Group',
      period: 'Summer 2024',
      roleDescription: 'Designed and developed a voice assistant to automate repetitive tasks and internal processes.',
      projects: ['Voice Assistant (Speech Recognition, Python)'],
      impact: 'Significantly reduced processing time for recurring operational tasks.',
      skills: ['Python', 'Artificial Intelligence', 'Automation'],
      testimonial: '“Oualid delivered innovative solutions aligned with internal operational needs.”',
      link: 'https://oualidkhmaich.vercel.app/'
    },
    {
      logoUrl: '../assets/diaheart.png',
      jobTitle: 'AI Developer',
      companyName: 'Personal Project – EMI',
      period: '2024',
      roleDescription: 'Developed machine learning models to detect diabetes and heart diseases.',
      projects: ['Classification Models (Scikit-learn, Pandas, Matplotlib)'],
      impact: 'Enhanced disease detection accuracy and contributed to preventive healthcare research.',
      skills: ['Machine Learning', 'Python', 'Pandas'],
      testimonial: '“A promising medical AI project with strong potential in disease prevention.”',
      link: 'https://oualidkhmaich.vercel.app/'
    },
    {
      logoUrl: '../assets/laureat.png',
      jobTitle: 'Full-Stack & AI Developer',
      companyName: 'Student Project – EMI',
      period: '2024',
      roleDescription: 'Built a student–graduate networking platform featuring AI-based CV filtering.',
      projects: [
        'Web Platform (Angular, Spring Boot)',
        'AI CV Filtering Service (FastAPI)'
      ],
      impact: 'Optimized student recruitment processes through intelligent CV screening.',
      skills: ['Angular', 'Spring Boot', 'FastAPI', 'Figma'],
      testimonial: '“Well-structured and highly relevant work in the field of AI-driven recruitment.”',
      link: 'https://oualidkhmaich.vercel.app/'
    }
  ];
}
