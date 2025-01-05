import css from './ImageCard.module.css';
import { ImageCardProps } from './ImageCard.types';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const ImageCard: React.FC<ImageCardProps> = ({ src, alt, onClick }) => {
  return (
    <div>
      <img className={css.img} src={src} alt={alt} onClick={onClick} />
      <ImageListItemBar
        title={alt}
        actionIcon={
          <IconButton
            sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
            aria-label={`info about ${alt}`}
          >
            <FavoriteBorderIcon />
          </IconButton>
        }
      />
    </div>
  );
};

export default ImageCard;
