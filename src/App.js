import './App.css';
import React from 'react'
import { Table } from 'react-bootstrap'
function App() {
  const users = [
    {
      name: 'Anil', email: 'anil@test.com', address: [
        { hm: '101', city: 'Noida', country: 'India' },
        { hm: '10', city: 'Gurgaon', country: 'India' },
        { hm: '23', city: 'Noida', country: 'India' },
        { hm: '45', city: 'Delhi', country: 'India' },
      ]
    },
    {
      name: 'Burce', email: 'bruce@test.com', address: [
        { hm: '101', city: 'Noida', country: 'India' },
        { hm: '10', city: 'Gurgaon', country: 'India' },
        { hm: '23', city: 'Noida', country: 'India' },
        { hm: '45', city: 'Delhi', country: 'India' },
      ]
    },
    {
      name: 'Peter', email: 'peter@test.com', address: [
        { hm: '101', city: 'Noida', country: 'India' },
        { hm: '10', city: 'Gurgaon', country: 'India' },
        { hm: '23', city: 'Noida', country: 'India' },
        { hm: '45', city: 'Delhi', country: 'India' },
      ]
    },
    {
      name: 'Sam', email: 'sam@test.com', address: [
        { hm: '101', city: 'Noida', country: 'India' },
        { hm: '10', city: 'Gurgaon', country: 'India' },
        { hm: '23', city: 'Noida', country: 'India' },
        { hm: '45', city: 'Delhi', country: 'India' },
      ]
    },
  ]
  return (
   <div className="App">
     <Table striped bordered hover>
       <tbody>
{
  users.map(data=>{
    return(
      <tr>
        <td>{data.name}</td>
        <td>{data.email}</td>
        <td>
          <Table striped bordered hover>
            <tbody>
              {data.address.map(item=>{
                return(
                  <tr>
                    <td>{item.hm}</td>
                    <td>{item.city}</td>
                    <td>{item.country}</td>
                  </tr>
                )
              })}
            </tbody>
          </Table>
        </td>
      </tr>
    )
  })
}
       </tbody>
     </Table>
   </div>
  );
}

export default App;