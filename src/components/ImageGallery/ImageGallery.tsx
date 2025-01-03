import css from './ImageGallery.module.css';
import ImageCard from '../ImageCard/ImageCard';
import { ImageGalleryProps } from './ImageGallery.types';

const ImageGallery: React.FC<ImageGalleryProps> = ({ items, onImageClick }) => {
  return (
    <ul className={css.gallery}>
      {items.map(item => (
        <li className={css.liItems} key={item.id}>
          <ImageCard
            src={item.urls.small}
            alt={item.alt_description}
            onClick={() =>
              onImageClick(item.urls.regular, item.alt_description)
            }
          />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
