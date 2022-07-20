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
        <p className="desc-div">{data.description}</p>
        <Button title="Reserve Rocket" />
      </div>
    </div>
  </>
);

Rocket.propTypes = {
  id: PropTypes.number,
  data: PropTypes.number,
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
