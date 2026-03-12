import User from "./User";
import UserClass from "./UserClass";
import React from "react";
class About extends React.Component {
  constructor(props) {
    super(props);
    console.log("Parent Constructor called");
  }
  componentDidMount() {
    console.log("Parent componentDidMount called");
  }
  render() {
    console.log("Parent Render called");
    return (
      <div>
        <h1>About Us</h1>
        <h4>React Learning Demo App</h4>
        <User name={"Anumita Kumari"} />
        <UserClass name={"First"} />
        <UserClass name={"Second"} />
        <UserClass name={"Third"} />
      </div>
    );
  }
}

// const About = () => {
//   return (
//     <div>
//       <h1>About Us</h1>
//       <h4>React Learning Demo App</h4>
//       <User name={"Anumita Kumari"} />
//       <UserClass name={"Anumita from Class"} />
//     </div>
//   );
// };
export default About;
