import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders Contact link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Contact/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders Contact link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Contact/i);
  expect(linkElement).toBeInTheDocument();
});
