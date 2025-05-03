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
