export interface BonusItem {
  num: string;
  title: string;
  desc: string;
  oldPrice: string;
}

export interface EbookModule {
  num: string;
  title: string;
  desc: string;
  category: 'direitos' | 'seguranca';
}

export interface FaqItem {
  q: string;
  a: string;
}

export interface TestimonialItem {
  name: string;
  age: number;
  location: string;
  role: string;
  image: string;
  stars: number;
  text: string;
}

export interface WhatsAppFeedback {
  initials: string;
  name: string;
  location: string;
  time: string;
  text1: string;
  highlightText: string;
  tag: string;
}
