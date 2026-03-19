import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

import { Profile } from '../../models/portfolio.models';

@Component({
  selector: 'app-contact-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact-section.component.html',
  styleUrl: './contact-section.component.scss'
})
export class ContactSectionComponent {
  @Input({ required: true }) profile!: Profile;
}
