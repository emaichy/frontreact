import './App.css';
import UserList from './components/userList/UserList';
import useUser from './hooks/useUser';

function App() {
  const {users} = useUser();

  console.log(users);
  return (
    <div className="App">
      <header className="App-header">
        <UserList users={users}/>
      </header>
    </div>
  );
}

export default App;