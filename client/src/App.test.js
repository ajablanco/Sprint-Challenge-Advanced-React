import React from 'react';
import App from './App';
import { render } from "@testing-library/react";
import '@testing-library/jest-dom';

test('renders without crashing', () => {
  render(<App />);
});

test('header shows up', () => {
  //arrange
  const { getByText } = render(< App />);

  //act
  const headerTitle = getByText(/women's world cup players/i);

  //assert that it is being rendered
  expect(headerTitle).toBeInTheDocument()
});

