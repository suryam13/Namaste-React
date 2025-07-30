import User from "./User";
import UserClass from "./UserClass";
import React from "react";

class About extends React.Component {
  constructor() {
    super();
    // console.log("Parent constructor");
  }

  componentDidMount() {
    // console.log("Parent componentMount");
  }

  componentDidUpdate()
  {
    //when the data is been updated with new api data then this would pe called 
  }

  componentWillUnmount()
  {
    //when any other page is been navigated and as a result the current page is been unmounted from the dom then this is called
  }

  render() {
    // console.log("Parent render");
    return (
      <div>
        <h1 className=" my-3.5 text-2xl"> This is About Page endpoint </h1>

        <User name={"Functional Suryam"} />
        <UserClass name={"Class based Suryam"} />
      </div>
    );
  }
}

export default About;
