import React from 'react';
import './App.css';
// import TodoContainer from './components/TodoContainer'
import BasicRoute from './components/Router'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <TodoContainer /> */}
        <BasicRoute />
      </header>
    </div>
  );
}

export default App;
