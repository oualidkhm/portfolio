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
      certificateImg: '../assets/linux.png',
      title: 'Certified Kubernetes Administrator',
      date: 'May 2023',
      organization: 'Cloud Native Computing Foundation',
      description: 'Validated expertise in Kubernetes administration.',
      link: 'https://www.cncf.io/certification/kubernetes-administrator/'
    },
    {
      certificateImg: '../assets/aws.jpeg',
      title: 'AWS Certified Solutions Architect',
      date: 'August 2022',
      organization: 'Amazon Web Services',
      description: 'Demonstrated skills in designing distributed systems on AWS.',
      link: 'https://aws.amazon.com/certification/certified-solutions-architect-associate/'
    },
    {
      certificateImg: '../assets/linux.png',
      title: 'Google Professional Cloud Architect',
      date: 'January 2021',
      organization: 'Google Cloud',
      description: 'Proven ability to design and manage cloud solutions on Google Cloud.',
      link: 'https://cloud.google.com/certification/cloud-architect'
    }
  ];
}
