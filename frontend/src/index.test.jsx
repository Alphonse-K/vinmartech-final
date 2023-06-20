import React from 'react';
import {render, screen} from '@testing-library/react';

// import '../__mocks__/intersectionObserverMock';
import ReactDOM from "react-dom/client";
import App from './App';
// import './index';

jest.mock('react-dom/client', ()  => ({render: jest.fn(), createRoot: jest.fn()}) );

describe('Testing the root of the app', () => {

   test('Should render without crashing!', () => {
      const div = document.createElement('div');
      div.id == 'root';
      document.body.appendChild(div);
      const root = ReactDOM.createRoot(document.getElementById('root'));
      render(
      <React.StrictMode>
            <App />
      </React.StrictMode>
      );
      expect(render).toHaveBeenCalledWith(<App />);
   })
})