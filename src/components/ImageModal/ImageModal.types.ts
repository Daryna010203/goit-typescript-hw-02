import { Image } from '../App/App.types';

export interface ImageModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  imageUrl: string;
  imageAlt: string;
}
