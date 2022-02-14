import logo from './logo.svg';
import './App.css';
import UserList from './component/UserList';
import PostList from './component/PostList';

function App() {
  return (
    <div className="App">
      App.js for Fetching
      <UserList/>
      <hr/>
      <PostList/>
    </div>
  );
}

export default App;
