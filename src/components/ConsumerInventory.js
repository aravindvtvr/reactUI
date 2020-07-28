import React ,{useEffect,useState} from 'react';

import MaterialTable from 'material-table';
import NavBar from './NavBar';
import axios from 'axios'
import { data } from 'autoprefixer';
export default function ConsumerInventory() {
  const columnsnew = [
    { title: 'Application', field: 'Application' },
    { title: 'App Id', field: 'AppId' },
    { title: 'Group', field: 'Group' },
    { title: 'Tech Stack', field: 'Tech_Stack'},
    { title: 'Owner', field: 'Owner'},
    { title: 'Email', field: 'Email'}
  ]


  
  const [data, setState] = useState([]);
  const [mynumber, setmynumber] = useState(0);
  const [serviceDetails, setserviceDetails] = useState([]);
    useEffect(() => {
    // lets call the API
    
    getServiceDetails();
    

  },[]);  
  const getServiceDetails = async () => {
    console.log ("let me call the APIS");
//    const question = await axios.get(`http://localhost:4000/`);
const question = await fetch(process.env.REACT_APP_CONSUMER_URL);
    const data1 = await question.json();

    console.log(data1[0].Operation);
    setState(data1);
    
    //setmynumber( mynumber +1);
    
  
  }
  
  console.log("rendering");
  console.log(mynumber);
  return (
    
      <div>
      <NavBar/>
      {console.log("inside")}
      {console.log(serviceDetails)}
      <div className ="Admin">
    <MaterialTable
      title="Consumer Application Inventory"
      columns={columnsnew}
      data={data}
      editable={{
        onRowAdd: (newData) =>
          new Promise((resolve) => {
            setTimeout(() => {
              resolve();
              setState((prevState) => {
                const data = [...prevState.data];
                console.log(newData);
                data.push(newData);
                return { ...prevState, data };
              });
            }, 600);
          }),
        onRowUpdate: (newData, oldData) =>
          new Promise((resolve) => {
            setTimeout(() => {
              resolve();
              if (oldData) {
                setState((prevState) => {
                  const data = [...prevState.data];
                  data[data.indexOf(oldData)] = newData;
                  return { ...prevState, data };
                });
              }
            }, 600);
          }),
        onRowDelete: (oldData) =>
          new Promise((resolve) => {
            setTimeout(() => {
              resolve();
              setState((prevState) => {
                const data = [...prevState.data];
                data.splice(data.indexOf(oldData), 1);
                return { ...prevState, data };
              });
            }, 600);
          }),
      }}
    />
    </div>
    </div>
  );
}
