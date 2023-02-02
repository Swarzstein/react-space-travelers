import React from 'react';
import { createRoot } from 'react-dom/client';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import Header from '../components/Header';
import store from '../redux/store';

it('renders without crashing', () => {
  const div = document.createElement('div');
  const root = createRoot(div);
  root.render(<Header />);
});

describe('Header tests', () => {
  it('renders header component', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Header />
        </BrowserRouter>
      </Provider>,
    );
    expect(screen.getByText('Space Travelers\' Hub')).toBeInTheDocument();
    expect(screen.getByText('My Profile')).toBeInTheDocument();
    expect(screen.getByText('Missions')).toBeInTheDocument();
  });
});
