import React from 'react';
import './App.css';
import Header from "./components/header/index";
import TaskAdd from "./components/addtask/index";
import TaskList from './components/tasklist';
import background from './background.jpg';


function App() {
  return (
    <div style={{backgroundImage:`url(${background})` }}>
    <div class="container">
    <div class="row">
      <Header></Header>
      </div>
      <div class="row">
      <div class="col-4">
      <TaskAdd></TaskAdd>
      </div>
      <div class="col-8">
      <TaskList></TaskList>
      </div>
      </div>
    </div>
    </div>
  );
}

export default App;
