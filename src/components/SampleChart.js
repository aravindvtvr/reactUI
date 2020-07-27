import React, { Component } from "react";
import Chart from "react-apexcharts";
import {Grid,Row,Col} from 'react-bootstrap';

class SampleChart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        chart: {
          id: "basic-bar"
        },
        xaxis: {
          categories: ["GetInventoryDetails", "GetUserDetails", "AddInventoryDetails", "UpdateUSerDetails","DeleteUserDetails","DeleteInventoryDetails"]
        }
      },
      series: [
        {
          name: "series-1",
          data: [30, 40, 45, 50, 49, 60]
        }
      ]
    };
  }

  render() {
    return (
      <div>
            <Chart
              options={this.state.options}
              series={this.state.series}
              type="bar"
              width="500"
            />
            
            
            </div>
            
      
    );
  }
}

export default SampleChart;