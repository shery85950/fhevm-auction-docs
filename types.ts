
// Fix: Import React to resolve the missing 'React' namespace for ReactNode
import React from 'react';

export interface NavItem {
  id: string;
  label: string;
}

export interface NavGroup {
  title: string;
  items: NavItem[];
}

export interface SectionProps {
  id: string;
  title: string;
  category?: string;
  children: React.ReactNode;
}