import React from 'react';
import App from './App';
import { render } from "@testing-library/react";


test('renders without crashing', () => {
  render(<App />);
});

test('Title displayed', () => {
  const { getByText } = render(<App />);
  getByText(/women's world cup players/i)
})

test("displays toggle function", () => {
  const { getByTestId } = render(<App />);
  getByTestId("toggle");
}); 