import React from 'react';
import './Rockets.css';
import PropTypes from 'prop-types';

function Button({ title, style }) {
  return (
    <button className="btn" type="button" style={style}>{title}</button>
  );
}
Button.propTypes = {
  title: PropTypes.string,
  style: PropTypes.string,
};
Button.defaultProps = {
  title: '',
  style: '',
};
export default Button;
