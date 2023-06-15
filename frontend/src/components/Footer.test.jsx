import React from 'react';
import { render, screen } from '@testing-library/react' ;
import '@testing-library/jest-dom';
import Footer from './Footer';


 test("Testing the footer component: ", () => {
    render(<Footer />);
 })