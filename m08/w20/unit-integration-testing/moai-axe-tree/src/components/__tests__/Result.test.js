import React from 'react';
import { render, fireEvent, getByTestId } from '@testing-library/react';
import Result from '../Result';

// Import the library to mock
import axios from 'axios';

// Tell jest to mock the library
jest.mock('axios');

const fakeData = [
  {
    "id": 1,
    "name": "Ana",
    "points": 13
  },
  {
    "id": 2,
    "name": "Margot",
    "points": 31
  },
  {
    "id": 3,
    "name": "Bob",
    "points": 17
  },
  {
    "id": 4,
    "name": "William",
    "points": 42
  },
  {
    "id": 5,
    "name": "Cairo",
    "points": 6
  }
]

test('can display results from an API call', () => {
  // Tell jest how to handle axios GET requests
  const response = { data: fakeData };
  axios.get.mockResolvedValue(response);

  // Render the result component
  const { getByTestId, findByText } = render(<Result status="Waiting" />)

  // Find the "high scores" button
  const button = getByTestId('high-scores');

  // Click on the "high scores" button
  fireEvent.click(button);

  // Check if the fake data has been loaded
  return findByText('Bob', { exact: false });
})

test('shows appropriate message when the status is "Waiting"', () => {
  const fakeState = {
    compSelection: null,
    playerSelection: null,
    status: 'Waiting',
    cheating: false
  };

  const { container } = render(<Result status={fakeState.status} />);
  expect(getByTestId(container, 'result_footer')).toHaveTextContent('Waiting for your choice!');
});
