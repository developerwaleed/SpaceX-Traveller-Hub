import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { reserve } from '../../redux/Missions/missions';

function MissionButton(props) {
  const dispatch = useDispatch();
  const { title, reserved, id } = props;
  const handleReservation = (e) => {
    e.preventDefault();
    dispatch(reserve({ id, reserved: !reserved }));
  };
  return (
    <button
      type="button"
      className={
        reserved
          ? 'bg-transparent hover:bg-red-500  text-red-700 font-semibold hover:text-white py-1 px-4 border border-red-500  hover:border-transparent rounded text-xs'
          : 'bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-1 px-6 border border-blue-500 hover:border-transparent rounded text-xs'
      }
      onClick={(e) => handleReservation(e)}
    >
      {title}
    </button>
  );
}

MissionButton.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  reserved: PropTypes.bool,
};

MissionButton.defaultProps = {
  id: 0,
  title: '',
  reserved: false,
};

export default MissionButton;
