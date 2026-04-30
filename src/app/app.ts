import { Component } from '@angular/core';

import { PortfolioShellComponent } from './portfolio-shell/portfolio-shell.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PortfolioShellComponent],
  template: '<app-portfolio-shell />'
})
export class App {}
