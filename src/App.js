import React, { Component } from 'react';
import Login from './components/login/Login';
import Hello from './components/table/Hello';
import Admin from './components/Admin'
import NavBar from './components/NavBar';
import List from './components/List';
import ServiceStat from './components/ServiceStat';
import ServiceChart from './components/SampleChart';
import MaterialTableDemo from './components/MaterialTableDemo';
import {Route, BrowserRouter} from 'react-router-dom';
import SampleChart from './components/SampleChart';
class App extends Component {
	render() {
		return (
			<BrowserRouter>
			<div className="App">				
				 <Route path="/login" component={Login}/>
				 <Route path="/start" component={Hello}/>												
				 <Route path="/admin" component={Admin}/>
				 <Route path="/servicerepo" component={MaterialTableDemo}/>
				 <Route path="/servicestats" component={ServiceStat}/>
				 <Route path="/samplechart" component={SampleChart}/>
				 
				 
				 
			
			</div>
			</BrowserRouter>
			
		);
	}
}

export default App;
