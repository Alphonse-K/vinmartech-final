import React from 'react';
import { render, screen } from '@testing-library/react' ;
import '@testing-library/jest-dom';
import ErrorBoundary from '../ErrorBoundry';
import NoPage from './NoPage';


 test("Testing the footer component: ", () => {
    render(
      <ErrorBoundary>
        <NoPage />
      </ErrorBoundary>
    );
 })