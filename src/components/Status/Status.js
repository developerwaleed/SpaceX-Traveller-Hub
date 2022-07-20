import React from 'react';
import PropTypes from 'prop-types';

function Status(props) {
  const { reserved } = props;
  return (
    <div
      className={
        reserved
          ? 'text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-xs px-2 py-1 text-center mr-2 mb-2 btn'
          : 'text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-xs px-5 py-1 text-center mr-2 mb-2 btn'
      }
    >
      {reserved ? ' Joined ' : 'Not Joined'}
    </div>
  );
}

Status.propTypes = {
  reserved: PropTypes.bool,
};

Status.defaultProps = {
  reserved: '',
};

export default Status;
