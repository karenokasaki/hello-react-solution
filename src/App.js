import "./App.css";
import Card from "./components/Card";
import Navbar from "./components/Navbar";
import Text from "./components/Text";

import icon1 from "./images/icon1.png";
import icon2 from "./images/icon2.png";
import icon3 from "./images/icon3.png";
import icon4 from "./images/icon4.png";

function App() {
  
  const data = [
    {
      title: "Declarative",
      icon: icon1,
      text: "React makes it painless to create interactive UIs.",
    },
    {
      title: "Components",
      icon: icon2,
      text: "React makes it painless to create interactive UIs.",
    },
    {
      title: "Single-Way",
      icon: icon3,
      text: "React makes it painless to create interactive UIs.",
    },
    {
      title: "JSX",
      icon: icon4,
      text: "React makes it painless to create interactive UIs.",
    },
  ];

  return (
    <div className="App">
      <div className="top">
        <Navbar />
        <Text />
      </div>

      <div className="pros">
        {data.map((cE) => {
          return (
            <Card
              key={cE.title}
              icon={cE.icon}
              text={cE.text}
              title={cE.title}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
