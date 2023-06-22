import React from 'react';
import { render, screen } from '@testing-library/react' ;
import '@testing-library/jest-dom';
import Footer from './Footer';
import { BrowserRouter } from 'react-router-dom';


 test("Testing the footer component: ", () => {
    render(<BrowserRouter><Footer /></BrowserRouter>
    );
 })