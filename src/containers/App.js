import React, { useState, useEffect } from 'react';
import SearchBox from '../components/SearchBox';
import CardList from '../components/CardList';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';
import './App.css';

function App() {
  // state:
  const [robots, setRobots] = useState([]);
  const [searchField, setSearchField] = useState('');
  // const [count, setCount] = useState(0);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => setRobots(users));
  }, []);

  const onSearchChange = event => setSearchField(event.target.value);

  // const { robots, searchField } = this.state;
  const filteredRobots = robots.filter(robot => {
    return robot.name.toLowerCase().includes(searchField.toLowerCase());
  });

  if (robots.length === 0) {
    return <h1>Loading...</h1>;
  } else {
    return (
      <div className="tc">
        <h1 className="f2">Robot Friends</h1>
        {/* <button onClick={() => setCount(count + 1)}>Click me!</button> */}
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
