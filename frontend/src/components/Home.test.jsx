import React from 'react';
import { render, screen } from '@testing-library/react' ;
import '@testing-library/jest-dom';
import ErrorBoundary from '../ErrorBoundry';
import Home from './Home';


 test("Testing the footer component: ", () => {
    render(
      <ErrorBoundary>
        <Home />
      </ErrorBoundary>
    );
 })