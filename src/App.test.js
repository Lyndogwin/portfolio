import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders Contact link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Contact/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders Home link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Home/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders Blog link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Blog/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders More link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/More/i);
  expect(linkElement).toBeInTheDocument();
});