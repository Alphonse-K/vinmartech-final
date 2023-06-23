import React from 'react';
import { render, screen } from '@testing-library/react' ;
import  userEvent  from '@testing-library/user-event';
import '@testing-library/jest-dom';
import Newsletter from './Newsletter';
import axios from 'axios';
import mockFetch from '../../__mocks__/mockAxios';

jest.mock('axios');


test("Testing the Newsletter component: ", async () => {
   render(<Newsletter />);

   const btn = await screen.findByRole('button');
   expect(btn).not.toBeDisabled();
   userEvent.click(btn);
   const res = mockFetch('http://localhost:8000/letter/');
   axios.post.mockImplementation(() => Promise.resolve({ data: {email: 'dka@fld.co', consent: true} }));

   expect(res.json()[0]).toEqual({email: 'kana@gmail.com', consent: false})
})