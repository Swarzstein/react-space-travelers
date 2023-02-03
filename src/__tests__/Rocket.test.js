import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import Rocket from '../components/Rocket';
import store from '../redux/store';

describe('Mission component test', () => {
  const el = {
    mission_id: 'F7709F2',
    mission_name: 'Eutelsat',
    description: 'Eutelsat S.A. is a European satellite operator. Providing coverage over the entire European continent, the Middle East, Africa, Asia and the Americas, it is the world\'s third largest satellite operator in terms of revenues.',
    status: false,
  };
  it('renders mission', () => {
    render(<Provider store={store}><Rocket mission={el} /></Provider>);
  });
});
