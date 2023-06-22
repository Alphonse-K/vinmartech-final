import React from 'react';
import { render, screen, cleanup } from '@testing-library/react' ;
import '@testing-library/jest-dom';
import Expertises from './Expertises';
import '../../__mocks__/intersectionObserverMock';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter } from 'react-router-dom';

afterEach(cleanup);

describe('Expertise Component:', () => {

   test("Testing the expertises component: ", () => {
      render(<BrowserRouter><HelmetProvider><Expertises /></HelmetProvider></BrowserRouter>);
      const htmlEl = screen.getAllByRole('button', {name: 'Vous avez un projet?'});
      expect(htmlEl[0]).toBeInTheDocument();
   })
})

//<BrowserRouter><ErrorBoundary><HelmetProvider><Expertises /></HelmetProvider></ErrorBoundary></BrowserRouter>