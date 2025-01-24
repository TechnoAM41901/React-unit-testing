import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Toggle from './Toggle';

test('shows content when toggled', () => {
  render(<Toggle />);
  
  const button = screen.getByText('Toggle');
  fireEvent.click(button);
  
  const content = screen.getByText('Content is visible!');
  expect(content).toBeInTheDocument();
});
