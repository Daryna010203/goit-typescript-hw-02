import css from './ImageGallery.module.css';
import ImageCard from '../ImageCard/ImageCard';
import { ImageGalleryProps } from './ImageGallery.types';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ListSubheader from '@mui/material/ListSubheader';
import { Box } from '@mui/material';
import { CenterFocusStrong } from '@mui/icons-material';

const ImageGallery: React.FC<ImageGalleryProps> = ({ items, onImageClick }) => {
  return (
    <Box
      component="section"
      sx={{
        p: 2,
        border: '2px solid grey',
        marginTop: 2,
        marginBottom: 2,
        borderRadius: 4,
        maxWidth: 1200,
      }}
    >
      <ul className={css.gallery}>
        <ImageList
          sx={{
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap',
          }}
        >
          <ImageListItem key="Subheader" cols={3}></ImageListItem>
          {items.map(item => (
            <ImageListItem key={item.id}>
              <ImageCard
                src={item.urls.small}
                alt={item.alt_description}
                onClick={() =>
                  onImageClick(item.urls.regular, item.alt_description)
                }
              />
            </ImageListItem>
          ))}
        </ImageList>
      </ul>
    </Box>
  );
};

export default ImageGallery;
