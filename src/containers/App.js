import React, { useState, useEffect } from 'react';
import SearchBox from '../components/SearchBox';
import CardList from '../components/CardList';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';
import './App.css';

function App() {
  // state and hooks:
  const [robots, setRobots] = useState([]);
  const [searchField, setSearchField] = useState('');

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => setRobots(users));
  }, []);

  const onSearchChange = event => setSearchField(event.target.value);

  const filteredRobots = robots.filter(robot =>
    robot.name.toLowerCase().includes(searchField.toLowerCase()),
  );

  if (robots.length === 0) {
    return <h1>Loading...</h1>;
  } else {
    return (
      <div className="tc">
        <h1 className="f2">Robot Friends</h1>
        <SearchBox searchChange={onSearchChange} />
        <Scroll>
          <ErrorBoundary>
            <CardList robots={filteredRobots} />
          </ErrorBoundary>
        </Scroll>
      </div>
    );
  }
}

export default App;
