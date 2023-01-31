import React from 'react';

const Mission = ({ name, description }) => (
  <div>
    <h1>{name}</h1>
    <h2>{description}</h2>
  </div>
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
