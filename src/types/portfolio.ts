export interface Hero {
  name: string;
  role: string;
  subTagline: string;
  description: string;
  imageUrl?: string;
  ctaButtons: {
    label: string;
    target: string;
  }[];
}

export interface About {
  title: string;
  subtitle: string;
  content: string;
  currentRole: string;
  imageUrl?: string;
}

export interface ExperienceItem {
  title: string;
  company: string;
  location?: string;
  startDate: string;
  endDate: string;
  description: string[];
  tags: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  location?: string;
  period: string;
  gpa?: string;
  honors?: string;
  scholarship?: string;
}

export interface Skill {
  name: string;
  category: string;
  label: string;
  icon?: string;
  imageUrl?: string;
}

export interface Publication {
  title: string;
  venue: string;
  year?: string;
  type: 'conference' | 'journal' | 'workshop';
}

export interface Achievement {
  title: string;
  description?: string;
  year?: string;
}

export interface Volunteering {
  role: string;
  organization: string;
  period: string;
  description: string;
  stats?: string[];
}

export interface Project {
  title: string;
  year: string;
  description: string;
  details?: string;
  images?: string[];
  role?: string;
  technologies?: string[];
  tags: string[];
  caseStudyUrl?: string;
  externalLink?: string;
}

export interface GalleryItem {
  imageUrl: string;
  title: string;
  subtitle: string;
  category: string;
}

export interface BlogPost {
  title: string;
  category: string;
  date: string;
  readTime: string;
  description: string;
  fullContent?: string;
  heroImage?: string;
  tags?: string[];
  url?: string;
  readMoreLink?: string;
}

export interface Testimonial {
  name: string;
  role: string;
  quote: string;
  company?: string;
}

export interface Contact {
  location: string;
  email: string;
  phone: string;
  socialLinks: {
    platform: string;
    url: string;
    icon?: string;
  }[];
}

export interface PortfolioData {
  hero: Hero;
  about: About;
  experience: ExperienceItem[];
  education: EducationItem[];
  skills: Skill[];
  research: {
    publications: Publication[];
    workshops: Publication[];
  };
  achievements: Achievement[];
  volunteering: Volunteering[];
  projects: Project[];
  gallery: GalleryItem[];
  blog: BlogPost[];
  testimonials: Testimonial[];
  contact: Contact;
}

