import React from 'react';

export const SectionHeader = (props) => {
  return (
    <div
      className="uppercase p-2 text-center tracking-wide text-sm text-indigo-500 font-semibold"
      {...props}
    >
      {props.children}
    </div>
  );
};