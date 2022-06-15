import React from 'react';

export const FiveColumn = (props) => {
  return (
    <div
      className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-5 lg:grid-cols-5 xl:grid-cols-5 gap-5"
      {...props}
    >
      {props.children}
    </div>
  );
};

export const TwoColumn = (props) => {
  return (
    <div
      className="rounded bg-white overflow-hidden shadow-md col-span-1 sm:col-span-1 md:col-span-2 lg:col-span-2 xl:col-span-2"
      {...props}
    >
      {props.children}
    </div>
  );
};

export const ThreeColumn = (props) => {
  return (
    <div
      className="rounded bg-white overflow-hidden shadow-md col-span-1 sm:col-span-1 md:col-span-3 lg:col-span-3 xl:col-span-3"
      {...props}
    >
      {props.children}
    </div>
  );
};