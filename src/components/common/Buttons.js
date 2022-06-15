import React from 'react';

export const TabButton = (props) => {
  return (
    <button
      className={`px-3 py-2 uppercase text-sm hover:bg-indigo-75 hover:font-semibold ${props.customclasses ? props.customclasses : ''}`}
      {...props}
    >
      {props.children}
    </button>
  );
};