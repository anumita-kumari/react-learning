import UserContext from "../utils/UserContext";
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
      <div className="m-2 p-2">
        <h1>About Us</h1>
        <h4>React Learning Demo App</h4>
        <UserContext.Consumer>
          {(data) => <h4>User:{data.loggedInUser}</h4>}
        </UserContext.Consumer>
        <User name={"Anumita Kumari"} />
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
