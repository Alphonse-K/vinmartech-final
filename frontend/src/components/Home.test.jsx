import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import userEvent  from '@testing-library/user-event';
import '@testing-library/jest-dom';
import '../../__mocks__/intersectionObserverMock';
import Home from './Home';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

 afterEach(cleanup);

 test("Testing the home component: ", () => {

    render(<BrowserRouter><HelmetProvider><Home /></HelmetProvider></BrowserRouter>);

    expect(screen.getByRole('button', {name: "Slide 1"}));
 })