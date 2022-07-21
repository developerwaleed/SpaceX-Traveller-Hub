/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import './Rockets.css';
import Button from './Button';

const Rocket = ({ data }) => (
  <>
    <div key={data.id} className="rocket-container">
      <div className="image-div">
        <img src={data.flickr_images} alt={data.rocket_name} />
      </div>
      <div className="description-div">
        <h1 className="name-div">{data.rocket_name}</h1>
        <p className="desc-div">
          {!data.reserved ? (
            ''
          ) : (
            <span className="bg-blue-200 text-white-500 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-white-500">
              Reserved
            </span>
          )}
          {data.description}
        </p>
        <Button
          title={data.reserved ? 'Cancel Reservation' : 'Reserve Rocket'}
          id={data.id}
          reserved={data.reserved}
        />
      </div>
    </div>
  </>
);
Rocket.propTypes = {
  id: PropTypes.number,
  data: PropTypes.object,
  rocket_name: PropTypes.string,
  description: PropTypes.string,
  flickr_images: PropTypes.string,
};
Rocket.defaultProps = {
  id: 0,
  data: '',
  rocket_name: '',
  description: '',
  flickr_images: '',
};
export default Rocket;
