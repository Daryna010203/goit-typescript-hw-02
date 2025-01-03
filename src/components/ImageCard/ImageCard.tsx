import css from './ImageCard.module.css';
import { ImageCardProps } from './ImageCard.types';

const ImageCard: React.FC<ImageCardProps> = ({ src, alt, onClick }) => {
  return (
    <div>
      <img className={css.img} src={src} alt={alt} onClick={onClick} />
    </div>
  );
};

export default ImageCard;
