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
    {
      name: 'Machine Learning',
      image: '../assets/ml.png',
      description: 'Model training & deployment | Python (Scikit-learn, FastAPI, Flask)'
    },
    {
      name: 'Data Science',
      image: '../assets/ds.png',
      description: 'Data analysis, visualization, Python (Pandas, NumPy, Matplotlib), Power BI'
    },
    {
      name: 'NLP',
      image: '../assets/nlp2.png',
      description: 'Text processing, sentiment analysis, Python libraries (NLTK, HuggingFace, Transformers)'
    },
    {
      name: 'Python Web & ML Apps',
      image: '../assets/strpy.png',
      description: 'Flask & Streamlit | Data dashboards, ML app deployment, interactive web apps'
    },
    {
      name: 'Cloud & DevOps',
      image: '../assets/clouddevops.png',
      description: 'Kubernetes, Docker, CI/CD, AWS | Cloud infrastructure & automation'
    },
    {
      name: 'AWS',
      image: '../assets/aws.png',
      description: 'Scalable cloud services for hosting, storage, and computing'
    },
    {
      name: 'Docker',
      image: '../assets/docker.png',
      description: 'Containerization for reproducible environments and deployment'
    },
    {
      name: 'Kubernetes',
      image: '../assets/kubernetes.png',
      description: 'Container orchestration for scalable applications'
    },
    {
      name: 'Web Development',
      image: '../assets/devweb.png',
      description: 'Angular | Spring Boot | HTML & CSS | Java | Full-stack web apps'
    }
  ];
}
