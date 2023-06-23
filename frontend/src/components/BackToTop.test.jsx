import React from 'react';
import { render, screen } from '@testing-library/react' ;
import '@testing-library/jest-dom';
import BackToTop from './BackToTop';

 test("Testing the back to top button", () => {
    render(<BackToTop />);
 })
