import { useSelector, useDispatch } from 'react-redux';
import React, { useEffect } from 'react';
import { fetchRockets } from '../../redux/Rockets/rockets';
import Rocket from './Rocket';
import './Rockets.css';

const Rockets = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchRockets());
  }, [dispatch]);
  const rockets = useSelector((state) => state.myRockets.rockets);
  console.log(rockets);
  return (
    <div className="card bg-gray-100">
      {
        rockets.map((data) => (
          <Rocket key={data.id} data={data} />
        ))
      }
    </div>
  );
};
export default Rockets;
