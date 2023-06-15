import React from 'react';
import { render, screen } from '@testing-library/react' ;
import '@testing-library/jest-dom';
import Expertises from './Expertises';
import ErrorBoundary from '../ErrorBoundry';


 test("Testing the expertises component: ", () => {
    render(   
    <ErrorBoundary>
      <Expertises />
     </ErrorBoundary>
  );
 })