import React, { Component } from 'react';
import { BrowserRouter as Router , Route } from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from './components/navbar.component';
import ExercisesList from './components/exercise-list.component';
import EditExercise from './components/edit-exercises.component';
import CreateExercise from './components/create-exercises.component';
import CreateUser from './components/create-user.component';

export default class App extends Component{
  render(){
    return (
      <Router>
        <div className="container">
          <Navbar />
          <br />
          <Route path="/" exact component={ExercisesList} />
          <Route path="/edit/:id" exact component={EditExercise} />
          <Route path="/create" exact component={CreateExercise} />
          <Route path="/user" exact component={CreateUser} />
        </div>
      </Router>
    );
  }
};