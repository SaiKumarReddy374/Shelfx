import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';

test('renders ShelfX homepage title', () => {
  render(<App />);
  const heading = screen.getByText(/shelfx/i);
  expect(heading).toBeInTheDocument();
});
