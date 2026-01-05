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
    // ---------- New Certifications ----------
    {
      certificateImg: '../assets/digital.png',
      title: 'Digital Transformation',
      date: 'Nov 2025',
      organization: 'Boston Consulting Group (BCG)',
      description: 'Digital Strategy & Innovation · Business & Technology Alignment · Data-Driven Decision Making',
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
      description: 'Computer Vision · Image Processing · Keras & TensorFlow',
      link: 'assets/cnnn1.png'
    },
    {
      certificateImg: '../assets/ndl.png',
      title: 'Neural Networks and Deep Learning',
      date: 'Jul 2025',
      organization: 'DeepLearning.AI',
      description: 'Neural Networks · Gradient Descent · Architecture Design',
      link: '../assets/ndl1.png'
    },

    // ---------- Existing Certifications ----------
    {
      certificateImg: '../assets/ds.png',
      title: 'Introduction to Data Science',
      date: '2024',
      organization: 'IBM (Coursera)',
      description: 'Core concepts and foundations of Data Science',
      link: '../assets/dsc.png'
    },
    {
      certificateImg: '../assets/ibm.png',
      title: 'Data Science Tools',
      date: '2024',
      organization: 'IBM (Coursera)',
      description: 'Overview of essential tools used in Data Science',
      link: '../assets/toolsc.png'
    },
    {
      certificateImg: '../assets/meth.png',
      title: 'Data Science Methodology',
      date: '2024',
      organization: 'IBM (Coursera)',
      description: 'Methodologies and best practices for Data Science projects',
      link: '../assets/methc.png'
    },
    {
      certificateImg: '../assets/fccc.png',
      title: 'Responsive Web Design',
      date: '2023',
      organization: 'freeCodeCamp',
      description: 'HTML, CSS, Flexbox & responsive design skills',
      link: '../assets/responsive web design.png'
    },
    {
      certificateImg: '../assets/sl.png',
      title: 'Machine Learning Basics',
      date: '2023',
      organization: 'Simplilearn',
      description: 'Introduction to key Machine Learning algorithms',
      link: '../assets/slc.png'
    }
  ];
}
