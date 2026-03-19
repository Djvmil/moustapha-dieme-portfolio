import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

import { Profile, StatItem } from '../../models/portfolio.models';

@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero-section.component.html',
  styleUrl: './hero-section.component.scss'
})
export class HeroSectionComponent {
  @Input({ required: true }) profile!: Profile;
  @Input({ required: true }) heroChips!: string[];
  @Input({ required: true }) stats!: StatItem[];
}
