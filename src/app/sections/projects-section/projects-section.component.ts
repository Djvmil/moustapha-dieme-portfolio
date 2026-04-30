import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

import { ProjectItem } from '../../models/portfolio.models';

@Component({
  selector: 'app-projects-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects-section.component.html',
  styleUrl: './projects-section.component.scss'
})
export class ProjectsSectionComponent {
  @Input({ required: true }) projects!: ProjectItem[];
}
