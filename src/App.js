import React, {useEffect} from 'react';
import './assets/scss/app.scss';
import Sidebar from './components/Sidebar/Sidebar';

const App = () => {

  useEffect(() => {
    document.title = "Murad | Portfolio"
  })
  
  return (
    <div className="app">
      <Sidebar />
    </div>
  );
}

export default App;
