import css from './LoadMoreBtn.module.css';
import { LoadMoreBtnProps } from './LoadMoreBtn.types';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

const LoadMoreBtn: React.FC<LoadMoreBtnProps> = ({ onClick }) => {
  return (
    <div className={css.LoadBtn}>
      <Stack
        spacing={2}
        direction="row"
        sx={{
          marginBottom: '8px',
        }}
      >
        <Button variant="outlined" onClick={onClick}>
          LoadMoreBtn
        </Button>
      </Stack>
    </div>
  );
};

export default LoadMoreBtn;
