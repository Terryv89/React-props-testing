const Persons = () => {
  return <PersonsInfo name="adolf" />;
};

const PersonsInfo = (props) => {
  return (
    <div className="i">
      <hr />
      <h1>{props.name}</h1>
      <hr />
    </div>
  );
};

export default Persons;
