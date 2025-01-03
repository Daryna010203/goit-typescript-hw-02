import { Image } from '../App/App.types';

export interface ImageGalleryProps {
  items: Image[];
  onImageClick: (imageUrl: string, imageAlt: string) => void;
}
