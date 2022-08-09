import React from 'react';
import './Rockets.css';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { reserveRocket } from '../../redux/Rockets/rockets';

function Button({ title, reserved, id }) {
  const dispatch = useDispatch();
  const handleReserve = (e) => {
    e.preventDefault();
    dispatch(reserveRocket({ id, reserved: !reserved }));
  };
  return (
    <>
      <button
        type="button"
        onClick={(e) => handleReserve(e)}
        className={
        !reserved
          ? 'text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 btn'
          : 'text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 btn'
      }
      >
        {title}
      </button>

    </>

  );
}
Button.propTypes = {
  title: PropTypes.string,
  reserved: PropTypes.bool,
  id: PropTypes.number,
};
Button.defaultProps = {
  title: '',
  reserved: '',
  id: '',
};
export default Button;
