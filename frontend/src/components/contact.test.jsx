import React from 'react';
import { render, screen } from '@testing-library/react' ;
import '@testing-library/jest-dom'
import Contact from './Contact';
import ErrorBoundary from '../ErrorBoundry';


 test("Testing the contact component: ", () => {
    render(
      <ErrorBoundary>
      <Contact />
     </ErrorBoundary>
    )
 })