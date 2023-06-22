import React from 'react';
import { render, screen } from '@testing-library/react' ;
import '@testing-library/jest-dom';
import Newsletter from './Newsletter';


 test("Testing the Newsletter component: ", () => {
    render(<Newsletter />);
 })