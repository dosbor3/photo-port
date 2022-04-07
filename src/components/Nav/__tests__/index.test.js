import React from 'react';
import {render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Nav from '..';

afterEach(cleanup);

//baseline test to see if the component is rendering and a snapshot test 
describe('Nav component', () => {
    it('renders', () => {
        render(<Nav />);
    });

    //snapshot test ~ compares snapshots versions of the DOM node structure (snapshot is a serialized version of the DOM node structure, enabled by Jest)
    it('matches snapshot', () => {
        const { asFragment } = render(<Nav />);
        expect(asFragment()).toMatchSnapshot();
    });
})

//creating test for emoji visibility
describe('emoji is visible', () => {
    // Arrange
    it('inserts emoji into the h2', () => {
        const { getByLabelText } = render(<Nav />);
      
        // Assert 
        expect(getByLabelText('camera')).toHaveTextContent('📸');     
    });
  })

  //creating a test for link visibility
  describe('links are visible', () => {
      it('inserts text into the links', () => {
        const { getByTestId } = render(<Nav />);
        expect(getByTestId('link')).toHaveTextContent('Oh Snap!');
        expect(getByTestId('about')).toHaveTextContent('About me');          
      });

  });
