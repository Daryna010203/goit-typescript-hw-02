import css from './SearchBar.module.css';
import { Field, Form, Formik, ErrorMessage } from 'formik';
import { TfiSearch } from 'react-icons/tfi';

import toast, { Toaster } from 'react-hot-toast';
import { SearchBarProps } from './SearchBar.types';
import { FormikHelpers } from 'formik';
import Paper from '@mui/material/Paper';
import SearchIcon from '@mui/icons-material/Search';
import IconButton from '@mui/material/IconButton';

const initialValues = { userSearch: '' };

const SearchBar = ({ onSearch }: SearchBarProps) => {
  const handleSubmit = (
    values: { userSearch: string },
    actions: FormikHelpers<{ userSearch: string }>
  ) => {
    if (!values.userSearch.trim()) {
      toast.error('Enter a search word');
      return;
    }
    onSearch(values.userSearch);

    actions.resetForm();
  };

  return (
    <header className={css.header}>
      <Paper
        component="div"
        sx={{
          p: '8px 8px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          bgcolor: '#cfe8fc',
        }}
      >
        <Formik initialValues={initialValues} onSubmit={handleSubmit}>
          <Form className={css.form}>
            <div>
              <IconButton
                type="submit"
                name="userSearch"
                sx={{ p: '10px', marginRight: '10px' }}
                aria-label="search"
              >
                <SearchIcon />
              </IconButton>

              <Field
                type="text"
                className={css.text}
                name="userSearch"
                placeholder="Search images and photos"
                autoFocus
              />
              <ErrorMessage
                className={css.errorMessage}
                name="userSearch"
                component="span"
              />
            </div>
            <Toaster />
          </Form>
        </Formik>
      </Paper>
    </header>
  );
};

export default SearchBar;
