import "./App.css";
import Job from "./Jobs.jsx";
import Person from "./Person.jsx";
import Persons from "./Persons.jsx";

function App() {
  return (
    <div className="App">
      <User name="bianca" age={23} email="terry.terry.com" salary={21000} />
      <hr />
      <User name="terry" age={34} email="Terry@terry.com" />
      <hr />
      <User />
      <Job />
      <Person />
      <Persons />
    </div>
  );
}

const User = (props) => {
  return (
    <div className="user">
      <h1>{props.name}</h1>
      <h1>{props.age}</h1>
      <h1>{props.email}</h1>
      <h1>{props.salary}</h1>
    </div>
  );
};

export default App;
