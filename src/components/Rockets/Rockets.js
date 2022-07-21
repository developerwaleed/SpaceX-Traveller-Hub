import { useSelector, useDispatch } from 'react-redux';
import React, { useEffect } from 'react';
import { fetchRockets } from '../../redux/Rockets/rockets';
import Rocket from './Rocket';
import './Rockets.css';

const Rockets = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchRockets());
  }, []);
  const rockets = useSelector((state) => state.rockets);
  return (
    <div className="card bg-gray-50">
      {
        rockets.rockets?.map((data) => (
          <Rocket key={data.id} data={data} />
        ))
      }
    </div>
  );
};
export default Rockets;
