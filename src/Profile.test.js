import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import UserProfile from './UserProfile';



test('renders user name after fetching', async () => {
  render(<UserProfile userId={2} />);
  
  expect(screen.getByText(/Loading/i)).toBeInTheDocument();
  
  const userName = await waitFor(() => screen.getByText('Michael'));
  expect(userName).toBeInTheDocument();
});



















// beforeEach(() => {
//   global.fetch = jest.fn(() =>
//     Promise.resolve({
//       json: () => Promise.resolve({ name: 'Emily' }),
//     })
//   );
// });

// afterEach(() => {
//   jest.resetAllMocks();
// });