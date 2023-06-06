import { announceResult, assignRobotItem } from '../helpers'

describe('announceResult function', () => {
  let fakeState;

  beforeEach(() => {
    fakeState = {
      compSelection: null,
      playerSelection: null,
      status: 'Waiting',
      cheating: false
    };
  });

  test('returns "Won" if player is "Axe" and comp is "Tree"', () => {
    fakeState.playerSelection = 'Axe';
    fakeState.compSelection = 'Tree';
    expect(announceResult(fakeState.playerSelection, fakeState.compSelection)).toBe('Won');
  });

  test('returns "Tied" if player is "Axe" and comp is "Axe"', () => {
    fakeState.playerSelection = 'Axe';
    fakeState.compSelection = 'Axe';
    expect(announceResult(fakeState.playerSelection, fakeState.compSelection)).toBe('Tied');
  });

  test('returns "Lost" if player is "Axe" and comp is "Moai"', () => {
    fakeState.playerSelection = 'Axe';
    fakeState.compSelection = 'Moai';
    expect(announceResult(fakeState.playerSelection, fakeState.compSelection)).toBe('Lost');
  });

  test('returns "Waiting" if nothing is passed in', () => {
    expect(announceResult()).toBe('Waiting');
  });
});

describe('assignRobotItem function', () => {

  test('given that cheating is true, return the winning item', () => {
    const cheating = true;
    const playerSelection = 'Tree';

    const actual = assignRobotItem(cheating, playerSelection);
    const expected = 'Axe';

    expect(actual).toBe(expected);
  });

  test('given that cheating is false, return a valid random item', () => {
    const cheating = false;
    const playerSelection = 'Tree';

    const actual = assignRobotItem(cheating, playerSelection);
    const validOptions = ['Axe', 'Moai', 'Tree'];

    expect(validOptions).toContain(actual);
  });
})