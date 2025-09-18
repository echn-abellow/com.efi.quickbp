export interface Metric {
  id: string;
  label: string;
  value: string;
  change: number;
  trend: 'up' | 'down';
  description: string;
}

export interface Objective {
  id: string;
  title: string;
  owner: string;
  description: string;
  progress: number;
  dueQuarter: string;
  status: 'on-track' | 'at-risk' | 'off-track';
}

export interface Milestone {
  id: string;
  quarter: string;
  title: string;
  description: string;
  status: 'completed' | 'in-progress' | 'upcoming';
  owner: string;
}

export interface SWOTCategory {
  title: string;
  items: string[];
}

export interface ActionItem {
  id: string;
  title: string;
  owner: string;
  dueDate: string;
  status: 'Not Started' | 'In Progress' | 'Blocked' | 'Complete';
  impact: 'High' | 'Medium' | 'Low';
  notes: string;
}

export interface FocusArea {
  id: string;
  title: string;
  summary: string;
  horizon: 'Short Term' | 'Mid Term' | 'Long Term';
  confidence: number;
}

export interface HeroContent {
  title: string;
  subtitle: string;
  updatedAt: string;
  primaryCta: string;
  secondaryCta: string;
}
