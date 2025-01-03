import css from './LoadMoreBtn.module.css';
import { LoadMoreBtnProps } from './LoadMoreBtn.types';

const LoadMoreBtn: React.FC<LoadMoreBtnProps> = ({ onClick }) => {
  return (
    <div className={css.loadBtn}>
      <button onClick={onClick} type="button">
        LoadMoreBtn
      </button>
    </div>
  );
};

export default LoadMoreBtn;
