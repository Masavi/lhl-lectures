export const announceResult = (playerSelection, compSelection) => {
  const lookup = {
    'Axe': 'Tree',
    'Tree': 'Moai',
    'Moai': 'Axe'
  };

  if (!(playerSelection && compSelection)) {
    return 'Waiting';
  }
  if (lookup[playerSelection] === compSelection) {
    return 'Won';
  }
  if (lookup[compSelection] === playerSelection) {
    return 'Lost';
  }
  return 'Tied';
};

export const genFeedbackMessage = (status) => {
  const lookup = {
    Waiting: 'Waiting for your choice!',
    Won: 'You win!!',
    Lost: 'Too bad! Better luck next time.',
    Tied: 'Tie game'
  };
  return lookup[status];
};

export const assignRobotItem = (cheating, playerSelection) => {
  // Return winning item if cheating is activated
  if (cheating) {
    const lookup = {
      'Tree': 'Axe',
      'Moai': 'Tree',
      'Axe': 'Moai'
    };

    return lookup[playerSelection];
  }

  // Return random valid item if cheating is not activated
  const validOptions = ['Moai', 'Axe', 'Tree'];
  const randomIndex = Math.floor(Math.random() * validOptions.length);
  return validOptions[randomIndex];
}