import React from 'react';

import AspectNav from './AspectNav';
import GraphLoader from './GraphLoader';

function Graph() {
  return (
    <div className="pl-1 pr-4">
      <AspectNav />
      <GraphLoader />
    </div>
  );
}

export default Graph;
