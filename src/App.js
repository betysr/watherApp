import React from 'react';
import WeatherApi from './components/WeatherApi';
import ToDoApp from './components/ToDoApp';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Navigation from './components/Navigation';

function App() {

  return (
    <>
      <Navigation/>
      <Router>
        <Routes>
          <Route path='/weatherApp' element={<WeatherApi/>}></Route>
          <Route path='/toDoApp' element={<ToDoApp/>} ></Route>
        </Routes>
      </Router>
     </>
  );
}

export default App;
