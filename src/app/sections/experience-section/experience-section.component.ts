import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

import { CompanyItem } from '../../models/portfolio.models';

@Component({
  selector: 'app-experience-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience-section.component.html',
  styleUrl: './experience-section.component.scss'
})
export class ExperienceSectionComponent {
  @Input({ required: true }) companies!: CompanyItem[];
}
