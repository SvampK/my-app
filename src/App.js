import './App.scss';
import React, { useEffect, useState } from 'react';
import ChangeLog from './ChangeLog';
import _ from "lodash";


function App() {
  const [issues, setIssues] = useState({});
  const [loading, setLoading] = useState(false);
  const [isExpanded, setExpanded] = useState(false);
  useEffect(() => {
    setLoading(true);
    fetch("http://localhost:4000/issues")
      .then(res => res.json())
      .then(items => setIssues([...items]))
      .then(setLoading(false))
      .catch(err => {
        console.error('There was an error:', err);
      });

  }, []);
  const handleToggle = () => {
    setExpanded(prevState => !prevState);
    console.log(isExpanded);
};

  return (
    <div className="App">
      <header className="App-header">
        <p>React App</p>
      </header>
      {!(_.isEmpty(issues))? 
      <ChangeLog 
      issues={issues} 
      isExpanded = {isExpanded}
      handleToggle = {handleToggle}
      /> : null}
    </div>
  );
}

export default App;
