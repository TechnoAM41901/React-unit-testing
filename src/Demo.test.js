import React from 'react';
import { getByRole, render, screen, fireEvent } from '@testing-library/react';
import DisplayHeading from './Demo';
import Counter from './Counter';

// test('Render the heading and verify the text', () => {
//   render(<DisplayHeading DynamicText="Hello, World!" />);
//   const heading = screen.getByRole('heading', { level: 1 });
//   expect(heading).toHaveTextContent('Hello, World!');
// });


// test() - outermost function in testing heirarchy,
//  used to give instruction and perform test cases

// render() - It will render the dynamic text through props

// screen() - Fetch the displayed data on the screen
// getByRole(role, level) -access the screened elements data


// expect() - verify screen value and rendered values
// toHaveTextContent() - text equality check




// test('increments count when button is clicked', () => {
//   render(<Counter />);
  
//   const button = screen.getByText('Increment');
//   fireEvent.click(button);
  
//   const countText = screen.getByText(/Count: 1/i);
//   expect(countText).toBeInTheDocument();
// });


































