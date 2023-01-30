import "./App.css";
import logoSmall from "./images/ironhack-logo-xs.png";
import menuTop from "./images/menu-top-xs.png";
import icon1 from "./images/icon1.png";
import icon2 from "./images/icon2.png";
import icon3 from "./images/icon3.png";
import icon4 from "./images/icon4.png";

function App() {
  return (
    <div className="App">
      <div className="top">
        <div className="navbar">
          <img src={logoSmall} alt="logo" />
          <img src={menuTop} alt="logo" />
        </div>

        <div className="top-text">
          <h1>Say hello to ReactJS</h1>
          <p>
            You will learn how to use the most popular frontend library, and
            became a super Ninja developer
          </p>
          <button>Awesome!</button>
        </div>
      </div>

      <div className="pros">
        <div>
          <img width={100} src={icon1} alt="" />
          <h2>Declarative</h2>
          <p>React makes it painless to create interactive UIs.</p>
        </div>
        <div>
          <img width={100} src={icon2} alt="" />
          <h2>Components</h2>
          <p>React makes it painless to create interactive UIs.</p>
        </div>
        <div>
          <img width={100} src={icon3} alt="" />
          <h2>Single Way</h2>
          <p>React makes it painless to create interactive UIs.</p>
        </div>
        <div>
          <img width={100} src={icon4} alt="" />
          <h2>JSX</h2>
          <p>React makes it painless to create interactive UIs.</p>
        </div>
      </div>
    </div>
  );
}

export default App;
