import { Component } from '@angular/core';
import {NgForOf, NgIf} from '@angular/common';

interface Certificate {
  certificateImg: string;
  title: string;
  date: string;
  organization: string;
  description: string;
  link?: string;
}

@Component({
  selector: 'app-certificates',
  templateUrl: './certificates.component.html',
  standalone: true,
  imports: [
    NgForOf,
    NgIf
  ],
  styleUrls: ['./certificates.component.css']
})
export class CertificatesComponent {

  selectedCertificate: string | null = null;

  showCertificate(img: string) {
    this.selectedCertificate = img;
  }

  closeCertificate() {
    this.selectedCertificate = null;
  }


  certificates: Certificate[] = [
    // ---------- Nouvelles certifications ----------
    {
      certificateImg: '../assets/digital.png',
      title: 'Digital Transformation',
      date: 'Nov 2025',
      organization: 'Boston Consulting Group (BCG)',
      description: ' Digital Strategy & Innovation · Business & Technology Alignment · Data-Driven Decision Making',
      link: '../assets/digital1.png'
    },
    {
      certificateImg: '../assets/mll.png',
      title: 'Machine Learning Specialization',
      date: 'Oct 2025',
      organization: 'DeepLearning.AI',
      description: 'Artificial Intelligence (AI) · Machine Learning · Data Science',
      link: '../assets/mll1.png'
    },
    {
      certificateImg: '../assets/cnnn.png',
      title: 'Convolutional Neural Networks',
      date: 'Sep 2025',
      organization: 'DeepLearning.AI',
      description: 'Image Processing · Computer Vision · Keras · TensorFlow',
      link: 'assets/cnnn1.png'
    },
    {
      certificateImg: '../assets/ndl.png',
      title: 'Neural Networks and Deep Learning',
      date: 'Jul 2025',
      organization: 'DeepLearning.AI',
      description: ' Neural Networks · Gradient Descent · Neural Network Architecture Design',
      link: '../assets/ndl1.png'
    },

    // ---------- Certifs existantes ----------
    {
      certificateImg: '../assets/ds.png',
      title: 'What is Data Science?',
      date: '2024',
      organization: 'IBM (Coursera)',
      description: 'Introduction aux concepts clés de la Data Science.',
      link: '../assets/dsc.png'
    },
    {
      certificateImg: '../assets/ibm.png',
      title: 'Data Science Tools',
      date: '2024',
      organization: 'IBM (Coursera)',
      description: 'Présentation des outils utilisés en Data Science.',
      link: '../assets/toolsc.png'
    },
    {
      certificateImg: '../assets/meth.png',
      title: 'Data Science Methodology',
      date: '2024',
      organization: 'IBM (Coursera)',
      description: 'Méthodologies pour les projets de Data Science.',
      link: '../assets/methc.png'
    },
    {
      certificateImg: '../assets/fccc.png',
      title: 'Responsive Web Design',
      date: '2023',
      organization: 'freeCodeCamp',
      description: 'Compétences en HTML, CSS, Flexbox et design responsive.',
      link: '../assets/responsive web design.png'
    },
    {
      certificateImg: '../assets/sl.png',
      title: 'Machine Learning',
      date: '2023',
      organization: 'Simplilearn',
      description: 'Introduction aux algorithmes de Machine Learning.',
      link: '../assets/slc.png'
    }
  ];


}
