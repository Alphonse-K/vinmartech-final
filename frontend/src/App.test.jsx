 import React from 'react';
//  import renderer from 'react-test-renderer';
//  import { ReactDOM } from 'react-router-dom';
 import { render, screen } from '@testing-library/react' ;
 import '../__mocks__/intersectionObserverMock'

import App from './App';


test('Launch landing page', () => {
    render(<App />);
})








