import React from 'react';
import { render, screen } from '@testing-library/react' ;
import '@testing-library/jest-dom';
import Testimonials from './Testimonials';

 test("Testing the testimonials", () => {
    render(
        <Testimonials />
    )
 })