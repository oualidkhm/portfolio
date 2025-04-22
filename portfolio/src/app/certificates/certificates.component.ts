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
  certificates: Certificate[] = [
    {
      certificateImg: '../assets/ds.png',
      title: 'What is Data Science?',
      date: '2024',
      organization: 'IBM (Coursera)',
      description: 'Introduction aux concepts clés de la Data Science.',
      link: 'https://www.coursera.org/learn/what-is-datascience'
    },
    {
      certificateImg: '../assets/ibm.png',
      title: 'Data Science Tools',
      date: '2024',
      organization: 'IBM (Coursera)',
      description: 'Présentation des outils utilisés en Data Science.',
      link: 'https://www.coursera.org/learn/data-science-tools'
    },
    {
      certificateImg: '../assets/meth.png',
      title: 'Data Science Methodology',
      date: '2024',
      organization: 'IBM (Coursera)',
      description: 'Méthodologies pour les projets de Data Science.',
      link: 'https://www.coursera.org/learn/data-science-methodology'
    },
    {
      certificateImg: '../assets/fccc.png',
      title: 'Responsive Web Design',
      date: '2023',
      organization: 'freeCodeCamp',
      description: 'Compétences en HTML, CSS, Flexbox et design responsive.',
      link: 'https://www.freecodecamp.org/certification'
    },
    {
      certificateImg: '../assets/sl.png',
      title: 'Machine Learning',
      date: '2023',
      organization: 'Simplilearn',
      description: 'Introduction aux algorithmes de Machine Learning.',
      link: 'https://www.simplilearn.com'
    }
  ];

}
