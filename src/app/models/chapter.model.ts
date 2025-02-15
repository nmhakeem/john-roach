import { SafeResourceUrl } from '@angular/platform-browser';

export interface Page {
  pageNumber: number;
  title: string;
  source: string;
  type: 'img' | 'video';
  safeUrl?: SafeResourceUrl;
}

export interface Chapter {
  chapterNumber: number;
  title: string;
  description: string;
  icon: string;
  pages: Page[];
}