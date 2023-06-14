import React from 'react';
//  import renderer from 'react-test-renderer';
//  import { ReactDOM } from 'react-router-dom';
import { render, screen } from '@testing-library/react' ;
import '@testing-library/jest-dom'
import Footer from './Footer';

// import Contact from './Contact';

 test("Testing the contact component: ", () => {
    render(<Footer />)
 })