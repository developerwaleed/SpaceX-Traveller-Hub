import { useSelector, useDispatch } from 'react-redux';
import React, { useEffect } from 'react';
import { fetchRockets } from '../../redux/Rockets/rockets';

const Rockets = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchRockets());
  }, [dispatch]);
  const rockets = useSelector((state) => state.myRockets.rockets);
  console.log(rockets);
  return (
    <div>
      <h2>Rocket</h2>
      {/* {
        rockets.map((data) => (
          <div key={data.id}>
            <h2>{data.id}</h2>
            <h1>{data.rocket_name}</h1>
            <p>{data.description}</p>
            <img src={data.flickr_images} alt={data.rocket_name} />
          </div>
        ))
      } */}
    </div>
  );
};
export default Rockets;
