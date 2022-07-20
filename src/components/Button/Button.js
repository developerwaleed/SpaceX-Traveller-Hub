import React from 'react';
import '../../index.css';

function Button() {
  return (
    <button
      type="button"
      className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded text-xs"
    >
      Join Mission
    </button>
  );
}

export default Button;
