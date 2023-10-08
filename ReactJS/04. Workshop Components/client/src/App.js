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

  const onUserCreateClick = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);
    const user = await userService.createUser(data);
    setUsers(state => [...state, user]);
  };

  const onUserDelete = async (userId) => {

    const user = await userService.deleteUser(userId);

    console.log(user);
    setUsers(state => state.filter(x => x._id !== userId));
  };


  return (
    <>
      <Header />
      <main className="main">
        <section className="card users-container">
          <Search />
          <UserList users={users} onUserCreateClick={onUserCreateClick} onUserDelete={onUserDelete} />

        </section>
      </main>
      <Footer />
    </>
  );
}

export default App;
