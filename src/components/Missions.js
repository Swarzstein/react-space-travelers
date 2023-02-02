import React from 'react';
import { useSelector } from 'react-redux';
import Mission from './Mission';

const Missions = () => {
  const missions = useSelector((state) => state.mission);

  return (
    <div>
      <ul className="table-title">
        <li className="mission-title">Mission</li>
        <li className="mission-description description-text">Description</li>
        <li className="mission-active status-text">Status</li>
        <li className="mission-join" />
      </ul>
      {missions.map((el) => (
        <>
          <Mission
            key={el.mission_id}
            id={el.mission_id}
            description={el.description}
            reserved={el.reserved}
            name={el.mission_name}
          />
        </>
      ))}
    </div>
  );
};

export default Missions;
