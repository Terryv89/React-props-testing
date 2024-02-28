const Job = () => {
  return (
    <div className="job">
      <Jobs salary={21000} position="ceo" company="google" />
      <hr />
      <Jobs salary="1000" position="cleaner" company="renova" />
      <Jobs />
    </div>
  );
};

const Jobs = (props) => {
  return (
    <div className="jobs">
      <h1>{props.salary}</h1>
      <h1>{props.position}</h1>
      <h1>{props.company}</h1>
    </div>
  );
};

export default Job;
