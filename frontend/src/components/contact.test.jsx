import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';

import Contact from './Contact';
import ErrorBoundary from '../ErrorBoundry';
import axios from 'axios';

// jest.mock('axios');
afterEach(cleanup);

describe('Contact.jsx: ', () => {

   test('Test button', async () => {
      render(<ErrorBoundary><Contact /></ErrorBoundary>)
      expect(await screen.findByRole('textbox')).toBeInTheDocument();
   })
   
})