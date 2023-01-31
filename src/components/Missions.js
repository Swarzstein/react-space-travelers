import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { missionFetch } from '../redux/missionReducer';

const Missions = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(missionFetch());
  }, [dispatch]);

  const missions = useSelector((state) => state.mission);

  return (
    <div>
      {missions.map((element) => (
        <>
          <h1>{element.mission_name}</h1>
          <h2>{element.description}</h2>
        </>
      ))}
      ,
    </div>
  );
};

export default Missions;
