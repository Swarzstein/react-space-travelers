import React from 'react';
import propTypes from 'prop-types';

const Mission = ({ name, description }) => (
  <ul className="table-content">
    <li className="mission-title">{name}</li>
    <li className="mission-description">{description}</li>
    <li className="mission-description">Active</li>
    <li className="mission-description">
      <button type="button">Join</button>
    </li>
  </ul>
);

export default Mission;

Mission.defaultProps = {
  name: '',
  description: '',
};

Mission.propTypes = {
  name: propTypes.string,
  description: propTypes.string,
};
