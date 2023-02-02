import React from 'react';
import { useDispatch } from 'react-redux';
import { cancelRocket, reserveRocket } from '../redux/rockets/rockets';

export default function Rocket(props) {
  const rocket = props;

  const dispatch = useDispatch();
  const reserve = () => {
    dispatch(reserveRocket(rocket.id));
  };
  const cancelReservation = () => {
    dispatch(cancelRocket(rocket.id));
  };

  return (
    <div className="card">
      <div className="card-img">
        <img src={rocket.image} alt="rocket" />
      </div>
      <div className="card-info">
        <h3 className="card-title">{rocket.name}</h3>
        <p className="card-description">
          {rocket.reserved && (<span className="reserved">  Reserved</span>)}
          {rocket.description}
        </p>
        {rocket.reserved ? <button type="button" className="cancel-btn" onClick={() => cancelReservation(rocket.id)}>Cancel Recervation</button> : <button type="button" className="reserve-btn" onClick={() => reserve(rocket.id)}>Reserve Rocket</button>}
      </div>
    </div>
  );
}
