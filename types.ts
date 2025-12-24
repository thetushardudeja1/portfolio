import React from 'react';

export interface ProjectStat {
  label: string;
  value: string;
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  image: string;
  description: string;
  technologies: string[];
  stats?: ProjectStat[];
  features?: string[];
  link?: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string;
  achievements: string[];
}

export interface Skill {
  name: string;
  icon: string;
  level: number; // 0-100
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: React.ReactNode;
}