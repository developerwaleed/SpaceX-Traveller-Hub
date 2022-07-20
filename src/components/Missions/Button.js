import React from 'react';
import '../../index.css';

function Button(props) {
  // eslint-disable-next-line react/prop-types
  const { title, id } = props;
  return (
    <button
      type="button"
      id={id}
      className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded text-xs"
    >
      {title}
    </button>
  );
}

export default Button;
