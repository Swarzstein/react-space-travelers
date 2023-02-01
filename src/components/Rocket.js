import React from 'react';
import { useDispatch } from 'react-redux';
import { reserveRocket } from '../redux/rockets/rockets';

export default function Rocket(props) {
  const rocket = props;
  const dispatch = useDispatch();
  const reserve = () => {
    dispatch(reserveRocket(rocket.id));
  };

  return (
    <div>
      <div>
        <img src={rocket.image} alt="rocket" />
      </div>
      <div>
        <h3>{rocket.name}</h3>
        <p>{rocket.description}</p>
        <button type="button" onClick={() => reserve(rocket.id)}>Reserve Rocket</button>
      </div>
    </div>
  );
}
