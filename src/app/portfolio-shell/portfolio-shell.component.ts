import { AfterViewInit, Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PORTFOLIO_DATA } from '../data/portfolio.data';
import { HeroSectionComponent } from '../sections/hero-section/hero-section.component';
import { AboutSectionComponent } from '../sections/about-section/about-section.component';
import { ExpertiseSectionComponent } from '../sections/expertise-section/expertise-section.component';
import { ExperienceSectionComponent } from '../sections/experience-section/experience-section.component';
import { ProjectsSectionComponent } from '../sections/projects-section/projects-section.component';
import { ContactSectionComponent } from '../sections/contact-section/contact-section.component';

@Component({
  selector: 'app-portfolio-shell',
  standalone: true,
  imports: [
    CommonModule,
    HeroSectionComponent,
    AboutSectionComponent,
    ExpertiseSectionComponent,
    ExperienceSectionComponent,
    ProjectsSectionComponent,
    ContactSectionComponent
  ],
  templateUrl: './portfolio-shell.component.html',
  styleUrl: './portfolio-shell.component.scss'
})
export class PortfolioShellComponent implements AfterViewInit {
  readonly data = PORTFOLIO_DATA;
  isScrolled = false;
  activeSection = 'about';

  ngAfterViewInit(): void {
    this.updateScrollState();
  }

  @HostListener('window:scroll')
  onWindowScroll(): void {
    this.updateScrollState();
  }

  private updateScrollState(): void {
    this.isScrolled = window.scrollY > 24;

    const scrollPosition = window.scrollY + 160;
    let currentSection = this.data.navItems[0].id;

    for (const item of this.data.navItems) {
      const section = document.getElementById(item.id);
      if (!section) {
        continue;
      }

      if (scrollPosition >= section.offsetTop) {
        currentSection = item.id;
      }
    }

    this.activeSection = currentSection;
  }
}
