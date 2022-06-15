import React, { useContext, useEffect, useState } from 'react';
import Chart from 'react-c3-component';
import c3 from 'c3/c3.css';
import { format } from 'fecha';

import { SessionContext } from '../../../context/SessionContext';

function GraphLoader() {
  const { graphData, weatherAspect } = useContext(SessionContext);

  const defaultCfg = () => {
    return {
      axis: {
        y: {
          label: {
            position: 'outer-middle',
            text: weatherAspect.yLabel,
          }
        },
      },
      data: {
        columns:[],
        x: 'x',
      },
      legend: {
        hide: true,
      }
    };
  }

  const [ graphConfig, setGraphConfig ] = useState(defaultCfg());
  const [ xData, setXData ] = useState(['x']);
  const [ yData, setYData ] = useState(['data1']);

  useEffect(() => {
    const newX = ['x'];
    const newY = ['data1'];
    graphData.forEach(n => {
      const dX = new Date(n.x);
      newX.push(dX.toISOString());
      newY.push(n.y);
    });
    setXData(newX);
    setYData(newY);
  }, [graphData]);

  useEffect(() => {
    let cfg = defaultCfg();
    if (xData.length > 1) {
      cfg.data.columns = [
        xData,
        yData,
      ];
      switch (weatherAspect.value) {
        case 'hourly':
        case 'windspeed':
          cfg.data.xFormat = '%Y-%m-%dT%H:%M:%S.%LZ';
          cfg.axis.x = {
            localtime: true,
            tick: {
              count: 8,
              culling: true,
              fit: true,
              format: (x) => {
                return format(x, 'ddd hA');
              },
              rotate: 45,
            },
            type: 'timeseries',
          };
          break;
      }
    }
    setGraphConfig(cfg);
    
  }, [xData, yData]);


  return (
    <Chart
      config={graphConfig}
      className="w-fit h-96"
    />
  );
}

export default GraphLoader;
