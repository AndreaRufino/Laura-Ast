
export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  color: string;
}

export interface Specialty {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface Testimonial {
  id: string;
  author: string;
  text: string;
  rating: number;
}

export interface FaqItem {
  id: number;
  question: string;
  answer: string;
}

export interface Message {
  role: 'user' | 'model';
  text: string;
}
