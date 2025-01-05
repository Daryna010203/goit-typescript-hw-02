import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import ScopedCssBaseline from '@mui/material/ScopedCssBaseline';

import App from './components/App/App';

import './index.css';

createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <ScopedCssBaseline enableColorScheme>
      <App />
    </ScopedCssBaseline>
  </StrictMode>
);
