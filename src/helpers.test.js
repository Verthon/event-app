import {formatLink} from './helpers';

test('Format link to lowercase and removing whitespaces', () => {
  expect(formatLink('Football Event')).toBe('football-event');
});


