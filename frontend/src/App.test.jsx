 import React from 'react';
//  import renderer from 'react-test-renderer';
//  import { ReactDOM } from 'react-router-dom';
 import { render, screen } from '@testing-library/react' ;
 import '../__mocks__/intersectionObserverMock'

import App from './App';

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

test('Launch landing page', () => {
    render(<App />);
})








