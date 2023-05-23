import React from 'react';

import MovieItem from '../components/MovieItem';

const config = {
  title: 'MovieItem',
  component: MovieItem,
};

export default config;

const Template = (args) => <MovieItem {...args} />;

export const One = Template.bind({});
One.args = {
  title: 'Titanic',
  year: '1999',
  director: 'James Cameron',
  id: 10,
  remove: () => {},
};

export const Two = Template.bind({});
Two.args = {
  title: '',
  year: '1999',
  // director: 'James Cameron',
  id: 10,
  // remove: () => {},
};


export const Third = Template.bind({});
Third.args = {
  title: '',
  year: '1999',
  // director: 'James Cameron',
  id: 10,
  // remove: () => {},
};
