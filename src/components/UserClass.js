import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      count2: 1,
    };
    console.log(this.props.name + " Child Constructor called");
  }
  componentDidMount() {
    console.log(this.props.name + " Child componentDidMount called");
  }
  render() {
    console.log(this.props.name + " Child Render called");
    return (
      <div className="user">
        <h1>Count: {this.state.count}</h1>
        <h2>Count2: {this.state.count2}</h2>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          Increment
        </button>
        <h1>Name: {this.props.name}</h1>
        <h4>Location: Patna</h4>
        <h4>Contact: anumita786</h4>
      </div>
    );
  }
}
export default UserClass;
