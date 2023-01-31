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
        <li className="mission-description">Description</li>
        <li>Status</li>
        <li />
      </ul>
      {missions.map((el) => (
        <>
          <Mission key={el.mission_id} description={el.description} name={el.mission_name} />
        </>
      ))}
    </div>
  );
};

export default Missions;
