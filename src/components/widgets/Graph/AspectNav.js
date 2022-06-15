import React, { useContext, useEffect, useState } from 'react';

import { SessionContext } from '../../../context/SessionContext';

import {
  TabButton,
} from '../../common/Buttons';

import aspects from '../../../constants/weatherAspects';

function AspectNav() {
  const [ navButtons, setNavButtons ] = useState([]);

  const { weatherAspect, setWeatherAspect } = useContext(SessionContext);

  const aspectClick = (v) => {
    setWeatherAspect(aspects[v.target.value]);
  }

  useEffect(() => {
    const aspectKeys = Object.keys(aspects);
    const btns = aspectKeys.map((n, i) => {
      const aspect = aspects[n];
      return (
        <TabButton
          key={`tab-btn-${i}`}
          customclasses={weatherAspect.value === aspect.value ? ' bg-indigo-100 font-semibold' : ''}
          onClick={aspectClick}
          value={aspect.value}
        >
          {aspect.title}
        </TabButton>
      );
    });

    setNavButtons(btns);
  }, [weatherAspect]);

  return (
    <nav
      className="flex sm:justify-center space-x-4"
    >
      {navButtons}
    </nav>
  );
}

export default AspectNav;
