import React from 'react';
import { render, screen } from '@testing-library/react' ;
import '@testing-library/jest-dom';
import Footer from './Footer';


function sum(a, b) {
   return a + b;
}
 test("Testing the footer component: ", () => {
    render(<Footer />);
    expect(sum(5, 8)).toEqual(13);
 })