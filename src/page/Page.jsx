import { Home, About, Experience, Projects, Studies } from "../views/index";
import "./Page.css";

const Page = () => {
  return (
    <div className="page_container">
      <div className="slides home">
        <Home></Home>
      </div>
      <div className="slides about">
        <About></About>
      </div>
      <div className="slides projects">
        <Projects></Projects>
      </div>
      <div className="slides studies">
        <Studies></Studies>
      </div>
      <div className="slides experience">
        <Experience></Experience>
      </div>
    </div>
  );
};

export default Page;
