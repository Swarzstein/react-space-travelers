import React from 'react';
import propTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { JOIN_MISSIONS } from '../redux/missionReducer';

const Mission = ({
  name, description, id, reserved,
}) => {
  const dispatch = useDispatch();

  // eslint-disable-next-line no-console
  console.log(id);

  const handleClick = (id) => {
    dispatch({ type: JOIN_MISSIONS, payload: id });
  };

  const buttonText = reserved ? 'Leave Mission' : 'Join Mission';
  const memberText = reserved ? 'Active Member' : 'Not a Member';

  return (
    <ul className="table-content">
      <li className="mission-title">{name}</li>
      <li className="mission-description">{description}</li>
      <li className="mission-active table-text-center">
        <button className={reserved ? 'non-member' : 'member-button'} type="button">{memberText}</button>
      </li>
      <li className="mission-join table-text-center">
        <button className={reserved ? 'leave-mission' : 'join-button'} onClick={() => handleClick(id)} type="button">{buttonText}</button>
      </li>
    </ul>
  );
};

export default Mission;

Mission.defaultProps = {
  name: '',
  description: '',
  id: '',
  reserved: '',
};

Mission.propTypes = {
  name: propTypes.string,
  description: propTypes.string,
  reserved: propTypes.bool,
  id: propTypes.number,
};
