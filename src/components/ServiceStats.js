import React, { Component } from 'react'
import MaterialTable from 'material-table';
import Chart from "react-apexcharts";
import SampleChart from './components/SampleChart';
import NavBar from './NavBar';


class ServiceStats extends Component {

  constructor(props) {
    super(props)
    this.state = {
      name: 'Vishwas'
    }
    console.log('ServiceStats constructor')
  }

  static getDerivedStateFromProps(props, state) {
    console.log('ServiceStats getDerivedStateFromProps')
    return null
  }

  componentDidMount() {
    console.log('ServiceStats componentDidMount')
  }

  shouldComponentUpdate() {
    console.log('ServiceStats shouldComponentUpdate')
		return true
	}

	getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('ServiceStats getSnapshotBeforeUpdate')
    return null
	}

	componentDidUpdate(prevProps, prevState, snapshot) {
		console.log('ServiceStats componentDidUpdate')
	}

  render() {
    console.log('ServiceStats render')
    return (
      <div>
        ServiceStats
      </div>
    )
  }
}

export default ServiceStats
