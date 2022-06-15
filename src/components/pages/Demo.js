import React from 'react';

import {
  FiveColumn,
  ThreeColumn,
  TwoColumn,
} from '../common/Containers';

import Graph from '../widgets/Graph/Graph';
import Map from '../widgets/Map/Map';

function Demo() {
  return (
    <FiveColumn>
      <TwoColumn>
        <Map />
      </TwoColumn>
      <ThreeColumn>
        <Graph />
      </ThreeColumn>
    </FiveColumn>
  );
}

export default Demo;
