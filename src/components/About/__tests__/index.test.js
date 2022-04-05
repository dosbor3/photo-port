import React from 'react';

import {render, cleanup } from '@testing-library/react';    //render function will render the component, cleanup will remove components from the DOM to prevent memory leaking and variable or data collisions between tests that could corrpupt test results

import '@testing-library/jest-dom/extend-expect'; //importing the extend-expect library from the jest-dom package, jest-dom offers access to custom matchers that are used to test DOM elements

import About from '..';

afterEach(cleanup); //calling the cleanup function using the afterEach global function from Jest, esures that after each test, we won't have any lefover memory data that could give us false results

describe ('About component', () => {    //function to deeclare the compenent we're testing 
    //first test
    it('renders', () => {
        render(<About />);
    });

    //Second Test, "test case", compares snapshot (serialized version of the DOM node structure) versions of the DOM node structure
    it('matches snapshot DOM node structure', () => {
        //render About
        const { asFragment } = render(<About />);   //the asFragment function returns a snapshot of the About component
        expect(asFragment()).toMatchSnapshot(); //using the expect function with the toMatchSnapshot matcher to assert taht snapshots will match

    })

})
