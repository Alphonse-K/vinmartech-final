import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';

import Contact from './Contact';
import axios from 'axios';
import { HelmetProvider } from 'react-helmet-async';

// jest.mock('axios');
afterEach(cleanup);

describe('Contact.jsx: ', () => {

   test('Test button', async () => {
      render(<HelmetProvider><Contact /></HelmetProvider>)
      expect( screen.getByRole('button')).toBeInTheDocument();
   })
   
})