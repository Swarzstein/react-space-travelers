import React from 'react';
import { useDispatch } from 'react-redux';
import { cancelRocket, reserveRocket } from '../redux/rockets/rockets';

export default function Rocket(props) {
  const rocket = props;

  console.log(rocket.reserved);
  const dispatch = useDispatch();
  const reserve = () => {
    dispatch(reserveRocket(rocket.id));
  };
  const cancelReservation = () => {
    dispatch(cancelRocket(rocket.id));
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
        <button type="button" onClick={() => cancelReservation(rocket.id)}>Cancel Recervation</button>
      </div>
    </div>
  );
}
