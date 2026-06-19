export interface ProcessStep {
  title: string;
  desc: string;
}

export interface NumberedProcessStep {
  n: string;
  title: string;
  desc: string;
}

export interface CaseStudy {
  shot: string;
  tag: string;
  title: string;
  desc: string;
  m1v: string;
  m1l: string;
  m2v: string;
  m2l: string;
}

export interface Quote {
  text: string;
  name: string;
  role: string;
}

export interface StatItem {
  v: string;
  l: string;
}

export interface ContactStep {
  n: string;
  title: string;
  desc: string;
}

export interface ContactFormState {
  name: string;
  email: string;
  company: string;
  message: string;
}
