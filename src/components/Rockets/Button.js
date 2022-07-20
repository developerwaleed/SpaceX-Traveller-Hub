import React from 'react';
import './Rockets.css';
import PropTypes from 'prop-types';

function Button({ title }) {
  return (
    <button className="btn" type="button">{title}</button>
  );
}
Button.propTypes = {
  title: PropTypes.string,
};
Button.defaultProps = {
  title: '',
};
export default Button;
