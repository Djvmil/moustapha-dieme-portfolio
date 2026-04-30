import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

import { ServiceItem } from '../../models/portfolio.models';

@Component({
  selector: 'app-expertise-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './expertise-section.component.html',
  styleUrl: './expertise-section.component.scss'
})
export class ExpertiseSectionComponent {
  @Input({ required: true }) services!: ServiceItem[];
}
