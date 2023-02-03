import React from 'react';
import { createRoot } from 'react-dom/client';
import MyMission from '../components/MyMission';

it('renders without crashing', () => {
  const div = document.createElement('div');
  const root = createRoot(div);
  root.render(<MyMission />);
});
