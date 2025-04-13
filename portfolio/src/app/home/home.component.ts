import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { ProjectsComponent } from '../projects/projects.component';
import { NgIf } from '@angular/common';
import { AboutMeComponent } from '../about-me/about-me.component';
import { CertificatesComponent } from '../certificates/certificates.component';
import { FooterComponent } from '../footer/footer.component';
import { IntroductionComponent } from '../introduction/introduction.component';
import { SkillsComponent } from '../skills/skills.component';
import { WorkExperienceComponent } from '../work-experience/work-experience.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  standalone: true,
  imports: [
    HeaderComponent,
    ProjectsComponent,
    NgIf,
    AboutMeComponent,
    CertificatesComponent,
    FooterComponent,
    IntroductionComponent,
    SkillsComponent,
    WorkExperienceComponent
  ],
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  showProfile = true;

  ngOnInit() {
    setTimeout(() => {
      this.showProfile = false; // Hide profile after 3 seconds
    }, 8000);
  }

  toggleView() {
    this.showProfile = false;
  }
}
