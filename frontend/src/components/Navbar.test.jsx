import React from 'react';
import { render, screen } from '@testing-library/react' ;
import '@testing-library/jest-dom';
import '../../__mocks__/intersectionObserverMock';
import Navbar from './Navbar';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter } from 'react-router-dom';


 test("Testing the footer component: ", () => {
    render(<BrowserRouter><HelmetProvider><Navbar /></HelmetProvider></BrowserRouter>);
 })