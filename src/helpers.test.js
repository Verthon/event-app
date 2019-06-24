import {formatLink} from './helpers';
import {formatDay} from './helpers';
import {filterBySearch} from './helpers';
import {filterByCategory} from './helpers';
import {filterByCity} from './helpers';

// Dummy data for tests
const event = [{
  category: "music",
  day: "May 3",
  description: "With world-class performances, Budapest strikes all the right notes with classical music fans. You'll find everything from symphony orchestras and ensembles to chamber music and opera in inspiring venues of all sizes.",
  host: "Budapest Philharmonic Orchestra",
  hour: "11:15 PM",
  localization: "Budapest",
  title: "Classical music concert",
  featuredImage: "https://source.unsplash.com/NsgsQjHA1mM"
}];

test('Format link to lowercase and remove whitespaces', () => {
  expect(formatLink('Football Event')).toBe('football-event');
});

test('Format Date() to string in format Month Day', () => {
  expect(formatDay(new Date('May 23 2019'))).toBe('23, May');
});

test('Filter events array by event.title based on search query', () => {
  expect(filterBySearch(event, "Classic")).toEqual(event);
  expect(filterBySearch(event, "Wrong input")).toEqual([]);
});

test('Filter events by event.localization based on category provided by user', () => {
  expect(filterByCategory(event, "Music")).toEqual(event);
  expect(filterBySearch(event, "Sport")).toEqual([]);
});

test('Filter events by event.localization based on city provided by user', () => {
  expect(filterByCity(event, "Budapest")).toEqual(event);
  expect(filterByCity(event, "Warsaw")).toEqual([]);
});


