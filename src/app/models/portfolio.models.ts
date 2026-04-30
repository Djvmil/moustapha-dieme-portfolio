export interface NavItem {
  label: string;
  href: string;
  id: string;
}

export interface StatItem {
  value: string;
  label: string;
}

export interface ServiceItem {
  title: string;
  description: string;
  items: string[];
}

export interface CompanyItem {
  name: string;
  logo: string;
  logoAlt: string;
  logoClass: string;
  description: string;
  website: string;
}

export interface ProjectItem {
  title: string;
  category: string;
  description: string;
  outcome: string;
  stack: string[];
  linkLabel?: string;
  linkUrl?: string;
}

export interface Profile {
  firstName: string;
  lastName: string;
  displayName: string;
  shortName: string;
  role: string;
  badge: string;
  location: string;
  tagline: string;
  intro: string;
  secondaryIntro: string;
  domain: string;
  email: string;
  linkedin: string;
  github: string;
}

export interface PortfolioData {
  profile: Profile;
  navItems: NavItem[];
  heroChips: string[];
  stats: StatItem[];
  services: ServiceItem[];
  companies: CompanyItem[];
  projects: ProjectItem[];
}
