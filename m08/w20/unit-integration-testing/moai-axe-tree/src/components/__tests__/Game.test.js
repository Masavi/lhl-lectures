import React from 'react';
import Game from '../Game';
import { fireEvent, render, prettyDOM } from '@testing-library/react';

test('can toggle the cheating mode by clicking on the robot head', () => {
  // Render the component
  const { container, debug, getByTestId } = render(<Game />);

  /**
   * Options to display the DOM Tree in console
   */
  // console.log(prettyDOM(container));
  // debug();

  // Finding the robot head icon
  const robotHeadIcon = getByTestId('robot-head');

  // Click on the robot head icon
  fireEvent.click(robotHeadIcon);

  // Check if the robot head has the class "cheating"
  expect(robotHeadIcon).toHaveClass('cheating');

  // Click on the robot head, again
  fireEvent.click(robotHeadIcon);

  // Check that the robot head DOES NOT have the class "cheating"
  expect(robotHeadIcon).not.toHaveClass('cheating');
});

