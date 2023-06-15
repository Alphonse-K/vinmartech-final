import React from 'react';
import { render, screen } from '@testing-library/react' ;
import '@testing-library/jest-dom';
import Spinner from './Spinner'

 test("Testing the loading component", () => {
    render(
        <Spinner />
    )
 })