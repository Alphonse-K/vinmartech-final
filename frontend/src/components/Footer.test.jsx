import React from 'react';
import { render, screen } from '@testing-library/react' ;
import '@testing-library/jest-dom';
import Footer from './Footer';
import ErrorBoundary from '../ErrorBoundry';


 test("Testing the footer component: ", () => {
    render(
      <ErrorBoundary>
      <Footer />
      </ErrorBoundary>
    );
 })