import React from 'react';
import './styles/App.css';
import MainScreen from './containers/MainScreen';
import TopBar from './components/TopBar';

function App() {
  return (
    <div className="App">
      <TopBar />
      <div className="App-content">
        <MainScreen />
      </div>
    </div>
  );
}

export default App;
