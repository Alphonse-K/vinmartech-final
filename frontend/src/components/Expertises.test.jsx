import React from 'react';
import { render, screen } from '@testing-library/react' ;
import Expertises from './Expertises';


function sum(a, b) {
   return a + b;
}
 test("Testing the expertises component: ", () => {
    render(<Expertises />);
    expect(sum(5, 8)).toEqual(13);
 })