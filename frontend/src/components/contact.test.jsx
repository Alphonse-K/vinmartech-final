import React from 'react';
import { render, screen } from '@testing-library/react' ;
import '@testing-library/jest-dom';
import Contact from './Contact';
import ErrorBoundary from '../ErrorBoundry';
import axios from 'axios';

// jest.mock('axios');

describe('Contact.jsx: ', () => {

         function tree()  {
            return  render(
               <ErrorBoundary>
                  <Contact />
               </ErrorBoundary>
               )
            }


   test('It should match with the snapshot', () => {

      screen.debug();
   })

   test('Test button', () => {
      const {getByPlaceholderText} = tree();
      expect(screen.getByPlaceholderText('À votre écoute'))
   })
   
})