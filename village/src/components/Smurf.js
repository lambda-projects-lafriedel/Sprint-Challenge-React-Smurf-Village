import React from "react";
// import { Link } from "react-router-dom";

// import SmurfProfile from './SmurfProfile';

// ---------------------------------

// Note: The comments in this file are related to the ones in SmurfProfile - this was part of the React Router Stretch Problem. It wasn't rendering properly.

const Smurf = props => {
  return (
    <div>
    {/* <Link to={`/smurf/${props.id}`}> */}
      <div className="Smurf">
        <h3>{props.name}</h3>
        {/* <p>{props.age} smurf years old</p>
        <p>{props.height} tall</p> */}
      </div>
    {/* </Link> */}
    {/* <Route path={`/smurf/${props.id}`} render={properties => <SmurfProfile {...properties} age={props.age} height={props.height} />}/> */}
    </div>

  );
};

Smurf.defaultProps = {
  name: "",
  height: "",
  age: ""
};

export default Smurf;
