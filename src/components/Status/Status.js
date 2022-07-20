import React from 'react';
import PropTypes from 'prop-types';

function Status(props) {
  const { reserved } = props;
  return (
    <div
      className={
        reserved
          ? 'text-white bg-blue-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-900 font-medium rounded-lg text-xs px-2 py-1 text-center mr-2 mb-2 btn'
          : 'text-white focus:ring-4 bg-teal-600 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-xs px-5 py-1 text-center mr-2 mb-2 btn'
      }
    >
      {reserved ? ' Active Member ' : 'Not a Member'}
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
