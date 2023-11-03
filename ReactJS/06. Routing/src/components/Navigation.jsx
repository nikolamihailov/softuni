import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav>
      <li>
        {/* wrapper of anchor tag, still <a></a> DOM element */}
        <Link to={"/"}>Home</Link>
      </li>
      {/*  Not proper way - a tag refreshes the page on redirect
     <li> 
        <a href="/about">About</a>
      </li> */}
      <li>
        <Link to={"/about"}>About</Link>
      </li>
      <li>
        <Link to={"/characters"}>Characters</Link>
      </li>
    </nav>
  );
};

export default Navigation;
