import React from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
import { Container } from 'react-bootstrap'

import Header from "./components/Header"
import Footer from "./components/Footer"
import ExercisesList from "./components/ExercisesList";
import EditExerciseScreen from "./screens/EditExerciseScreen";
import CreateExercise from "./components/CreateExercise";
import CreateUserScreen from "./screens/CreateUserScreen";

function App() {
  return (
    <Router>
      <Header />
      <Container> 
        <Route path="/" exact component={ExercisesList} />
        <Route path="/edit/:id" component={EditExerciseScreen} />
        <Route path="/create" component={CreateExercise} />
        <Route path="/user" component={CreateUserScreen} />
      </Container>
      <Footer />
    </Router>
  );
}

export default App;