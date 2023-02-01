import React from 'react';
import { useSelector } from 'react-redux';
import Rocket from './Rocket';

export default function Rockets() {
  const rockets = useSelector((state) => state.rockets);
  return (
    <section id="rockets">
      {rockets.map(
        (rocket) => (
          <Rocket
            key={rocket.id}
            id={rocket.id}
            name={rocket.rocket_name}
            description={rocket.description}
            image={rocket.flickr_images[0]}
          />
        ),
      )}
    </section>
  );
}
