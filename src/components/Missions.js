import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { missionFetch } from '../redux/missionReducer';
import Mission from './Mission';

const Missions = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(missionFetch());
  }, [dispatch]);

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
