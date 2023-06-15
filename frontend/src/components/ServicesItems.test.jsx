import React from 'react';
import { render, screen } from '@testing-library/react' ;
import '@testing-library/jest-dom';
import ServicesItem from './ServicesItem';

 test("Testing the services item component", () => {
    render(
        <ServicesItem />
    )
 })