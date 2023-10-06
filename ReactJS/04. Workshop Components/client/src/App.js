import { useEffect, useState } from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import Search from './components/Search';
import UserList from './components/UserList';
import { userService } from "./services/userService";
function App() {

  const [users, setUsers] = useState([]);
  useEffect(() => {
    userService.getAllUsers()
      .then(users => setUsers(users))
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <Header />
      <main className="main">
        <section className="card users-container">
          <Search />
          <UserList users={users} />
          <button className="btn-add btn">Add new user</button>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default App;
