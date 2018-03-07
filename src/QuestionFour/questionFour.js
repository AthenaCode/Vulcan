import React, { Component } from 'react';
import createPlotlyComponent from 'react-plotlyjs';
import Plotly from 'plotly.js/dist/plotly-cartesian';

const PlotlyComponent = createPlotlyComponent(Plotly);


export default class QuestionFour extends Component {
	render(){
    let xValues = ['Friday', 'Monday', 'Saturday', 'Sunday', 'Thursday', 'Tuesday', 'Wednesday'];
    let yValues = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23];
    let zValues = [
        [56, 56, 56, 57, 53, 56, 55], 
        [56, 55, 56, 59, 52, 54, 54], 
        [58, 56, 62, 60, 57, 59, 57], 
        [57, 56, 60, 63, 60, 58, 58],
        [60, 62, 61, 62, 61, 61, 59],
        [63, 60, 65, 66, 60, 61, 64], 
        [62, 58, 68, 66, 62, 61, 60], 
        [59, 61, 63, 53, 60, 60, 60], 
        [62, 60, 63, 65, 62, 61, 58],
        [59, 57, 64, 62, 56, 58, 59],
        [58, 58, 64, 62, 57, 58, 58], 
        [57, 58, 62, 60, 56, 58, 57], 
        [59, 59, 61, 61, 57, 58, 57],
        [58, 58, 62, 62, 58, 57, 58],
        [57, 59, 62, 59, 55, 57, 58],
        [57, 59, 61, 61, 55, 57, 57],
        [55, 57, 60, 58, 55, 56, 54],
        [56, 55, 60, 58, 54, 54, 53],
        [55, 55, 60, 58, 55, 55, 52],
        [55, 52, 59, 56, 53, 53, 54],
        [56, 53, 58, 57, 52, 52, 54],
        [56, 54, 58, 56, 53, 51, 54],
        [55, 54, 57, 55, 52, 52, 54],
        [55, 51, 60, 54, 52, 50, 53]
      ];

    let colorscaleValue = [
      [0, '#3D9970'],
      [1, '#001f3f']
    ];

    let data = [{
      x: xValues,
      y: yValues,
      z: zValues,
      type: 'heatmap',
      colorscale: colorscaleValue,
      showscale: true
    }];

    let layout = {
      title: '',
      annotations: [],
      xaxis: {
        ticks: '',
        side: 'top'
      },
      yaxis: {
        ticks: '',
        ticksuffix: ' ',
        autosize: true, 
        autorange: 'reversed'
      },
      height: 1000, 
      width: 1000
    };

    for ( let i = 0; i < yValues.length; i++ ) {
      for ( let j = 0; j < xValues.length; j++ ) {
        let currentValue = zValues[i][j];
        let textColor = 'white';
        let result = {
          xref: 'x1',
          yref: 'y1',
          x: xValues[j],
          y: yValues[i],
          text: zValues[i][j],
          font: {
            family: 'Arial',
            size: 12,
            color: 'rgb(50, 171, 96)'
          },
          showarrow: false,
          font: {
            color: textColor
          }
        };
        layout.annotations.push(result);
      }
    }

  return (
      <PlotlyComponent data={data} layout={layout}/>
    );
  }
}
