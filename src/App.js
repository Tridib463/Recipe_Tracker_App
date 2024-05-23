import React from 'react'
import Header from './components/Header';
import Content from './components/Content';

const App = () => {
  return (
    <div className="App">
    <Header title="Grocery List"/>
    <Content/>
    </div>
  );
}


export default App