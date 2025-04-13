import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {IntroductionComponent} from './introduction/introduction.component';
import {SkillsComponent} from './skills/skills.component';
import {ProjectsComponent} from './projects/projects.component';
import {WorkExperienceComponent} from './work-experience/work-experience.component';
import {CertificatesComponent} from './certificates/certificates.component';
import {AboutMeComponent} from './about-me/about-me.component';
import {HomeComponent} from './home/home.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent, IntroductionComponent, SkillsComponent, ProjectsComponent, WorkExperienceComponent, CertificatesComponent, AboutMeComponent, HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'portfolio';
}
