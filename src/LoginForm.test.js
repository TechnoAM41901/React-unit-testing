import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import LoginForm from './LoginForm';




test('shows error message on invalid email', () => {
  render(<LoginForm />);
  
  const input = screen.getByPlaceholderText(/Enter your email/i);
  const button = screen.getByText('Login');
  
  fireEvent.change(input, { target: { value: 'invalidEmail' } });
  fireEvent.click(button);
  
  const errorMessage = screen.getByRole('alert');
  expect(errorMessage).toHaveTextContent('Invalid email');
});















test('does not show error message on valid email', () => {
  render(<LoginForm />);
  
  const input = screen.getByPlaceholderText(/Enter your email/i);
  const button = screen.getByText('Login');
  
  fireEvent.change(input, { target: { value: 'test@example.com' } });
  fireEvent.click(button);
  
  const errorMessage = screen.queryByRole('alert');
  expect(errorMessage).not.toBeInTheDocument();
});
