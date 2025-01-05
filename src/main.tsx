import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import ScopedCssBaseline from '@mui/material/ScopedCssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

import App from './components/App/App';

import './index.css';
import { ViewModule } from '@mui/icons-material';

createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <ScopedCssBaseline enableColorScheme>
      <Container>
        <Box sx={{ bgcolor: '#cfe8fc', height: visualViewport }}>
          <App />
        </Box>
      </Container>
    </ScopedCssBaseline>
  </StrictMode>
);
