import React from 'react';
import { render, screen } from '@testing-library/react' ;
import  userEvent  from '@testing-library/user-event';
import '@testing-library/jest-dom';
import Newsletter from './Newsletter';

const callBack = jest.fn(x => x);

 test("Testing the Newsletter component: ", async () => {

   render(<Newsletter />);

   userEvent.click('button').then(expect(callBack(2)).toBe(2));
   expect(screen.getByRole('button')).not.toBeDisabled();
   expect(screen.getByRole('heading', {name: 'Préparez vous à réussir votre aventure digital!'}));

 })