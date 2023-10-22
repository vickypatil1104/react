import { Component } from "react";
class UserClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  render() {
    const { name } = this.props;
    const { count } = this.state;
    return (
      <div className="userCard">
        <h1>Name: {name}</h1>
        <h1>Count: {count}</h1>
        <button
          onClick={() => {
            this.setState({ count: count + 1 });
          }}
        >
          Count+
        </button>
        <p>Location: kalyan</p>
        <p>Contact: shradhanandpatil@gmail.com</p>
      </div>
    );
  }
}

export default UserClass;
