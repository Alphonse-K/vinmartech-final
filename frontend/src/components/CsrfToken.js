
import React from 'react';
import { csrftoken } from './token';

const CSRFToken = () => {
    // console.log(csrftoken)
    return (
        <input type="hidden" name="csrfmiddlewaretoken" value={csrftoken} />
    );
};


export default CSRFToken;
