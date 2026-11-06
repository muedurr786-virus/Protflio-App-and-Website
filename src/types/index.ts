export type ProjectCategory = 'all' | 'product' | 'systems' | 'spatial' | 'branding' | 'mobile';

export interface ProjectMetric {
  value: string;
  label: string;
  context: string;
}

export interface DesignToken {
  name: string;
  value: string;
  role: string;
  type: 'color' | 'radius' | 'spacing';
}

export interface CaseStudyData {
  problem: string;
  solution: string;
  roleDescription: string;
  duration: string;
  team: string[];
  tokens: DesignToken[];
  keyFeatures: {
    title: string;
    description: string;
  }[];
  researchInsights: string[];
  outcomes: string[];
  testimonial?: {
    quote: string;
    author: string;
    role: string;
    company: string;
  };
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  client: string;
  year: string;
  category: ProjectCategory;
  categoryLabel: string;
  role: string;
  description: string;
  coverImage: string;
  secondaryImages?: string[];
  accentColor: string;
  metrics: ProjectMetric[];
  tags: string[];
  tools: string[];
  bentoSpan?: string;
  featured?: boolean;
  caseStudy: CaseStudyData;
}

export interface ExperienceItem {
  period: string;
  role: string;
  company: string;
  location: string;
  description: string;
  highlights: string[];
}

export interface AwardItem {
  year: string;
  title: string;
  organization: string;
  project: string;
}
