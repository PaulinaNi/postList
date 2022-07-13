import { Component } from 'react'
import './App.css';

import PostList from './components/postsList/postsList.component';

class App extends Component {

  render() {
    return (
      <div className="App">
        <h1>Redex</h1>
        <PostList />
      </div>
    )
  };
}

export default App;
