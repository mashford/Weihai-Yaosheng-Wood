export interface Product {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  category: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  timestamp: number;
}

export enum SectionId {
  HOME = 'home',
  ABOUT = 'about',
  PRODUCTS = 'products',
  ADVANTAGES = 'advantages',
  CONTACT = 'contact'
}