const Person = () => {
  return (
    <div>
      <PersonInfo name="Terry" age={34} phoneNr="112" />
      <PersonInfo name="Rorbert" age={38} phoneNr="1337" />
    </div>
  );
};

const PersonInfo = (props) => {
  return (
    <div>
      <hr />
      <h1>{props.name}</h1>
      <h1>{props.age}</h1>
      <h1>{props.phoneNr}</h1>
    </div>
  );
};

export default Person;
