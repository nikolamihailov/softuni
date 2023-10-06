import Footer from './components/Footer';
import Header from './components/Header';
import Search from './components/Search';
import UserList from './components/UserList';

function App() {
  return (
    <>
      <Header />
      <main class="main">
        <section class="card users-container">
          <Search />
          <UserList />
        </section>
      </main>
      <Footer />
    </>
  );
}

export default App;
