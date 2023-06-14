import React from 'react';
//  import renderer from 'react-test-renderer';
//  import { ReactDOM } from 'react-router-dom';
import { render, screen } from '@testing-library/react' ;
import BackToTop from './BackToTop';

 test("Testing the back to top button", () => {
    render(<BackToTop />)
 })
