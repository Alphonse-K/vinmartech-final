import React from 'react';
import { render, screen } from '@testing-library/react' ;
import '@testing-library/jest-dom';
import '../../__mocks__/intersectionObserverMock';
import NoPage from './NoPage';
import { HelmetProvider } from 'react-helmet-async';


 test("Testing the footer component: ", () => {
    render(<HelmetProvider><NoPage /></HelmetProvider>);
 })