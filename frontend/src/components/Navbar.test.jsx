import React from 'react';
import { render, screen } from '@testing-library/react' ;
import '@testing-library/jest-dom';
import ErrorBoundary from '../ErrorBoundry';
import Navbar from './Navbar';


 test("Testing the footer component: ", () => {
    render(
      <ErrorBoundary>
        <Navbar />
      </ErrorBoundary>
    );
 })