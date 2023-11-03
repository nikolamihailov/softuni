import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Navigation from "./components/Navigation";
import CharactersList from "./components/CharactersList";
import Character from "./components/Character";

function App() {
  return (
    <>
      <header>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route
            path="/characters"
            element={<CharactersList />}
          />
          <Route
            path="/characters/:id"
            element={<Character />}
          />
          <Route path="*" element={<h1>Error page</h1>} />
        </Routes>
      </header>
    </>
  );
}

export default App;
