 import React from 'react';
 import { render, screen } from '@testing-library/react' ;

import App from './App';

test('Launch landing page', () => {
    render(<App />);
})

function sum(a, b) {
    return a + b;
}

test('Testing the sum', () => {
    expect(sum(1, 2)).toEqual(3)
    expect(sum(104, 4)).toEqual(108)
})

function name(str) {
    return str;
}

test('Return name', () => {
    expect(name("alphonse")).toBe('alphonse')
})