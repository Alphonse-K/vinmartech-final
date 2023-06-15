import React from 'react';
import { render, screen } from '@testing-library/react' ;
import Expertises from './Expertises';


 test("Testing the expertises component: ", () => {
    render(<Expertises />);
 })