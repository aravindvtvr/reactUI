import React, { Component } from 'react';
import Chart from 'react-apexcharts'
class Donut extends Component {

    constructor(props) {
      super(props);
  
      this.state = {
        options: {},
        services: [44, 55, 41, 17, 15],
        labels: ['Hai', 'B', 'C', 'D', 'E']
      }
    }
  
    render() {
  
      return (
        <div className="donut">
          <Chart options={this.state.options} series={this.state.services} labels = {this.state.labels}type="donut" width="380" />
        </div>
      );
    }
  }
  
  export default Donut;