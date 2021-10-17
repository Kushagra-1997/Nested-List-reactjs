import React from 'react'
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'
import User from './User'

const App = () => {
  let users = [
    { name: 'anil', id: 1 },
    { name: 'peter', id: 2 },
    { name: 'bruce', id: 3 },
    { name: 'tony', id: 4 },
  ]
  return (
    <div>
      <Router>
      {users.map((user, i) => {
        return (
          <div key={i}>
            <Link to={"/user/"+user.name+"/"+user.id}><h3>{user.name}</h3></Link>
          </div>
        )
      })}
      <Route path="/user/:name/:id"><User /></Route>
      </Router>
    </div>
  )
}

export default App
