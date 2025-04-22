import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        // count: 0,
        userInfo: {
            name: "",
            location: ""
        }
    }
  }

  async componentDidMount(){
    const data = await fetch("https://api.github.com/users/shasan419");
    const json = await data.json();
    console.log(json)
    this.setState({
        userInfo: json,
    })
  }

  render() {
    // const {name} = this.props;
    // const {count} = this.state;
    const {name, location} = this.state.userInfo;

    return (
      <div className="user-card">
        {/* <h1>Count : {count}</h1> */}
        {/* <button onClick={() => 
            this.setState({count: this.state.count+1})
        }>Increment</button>
        <button onClick={() => 
            this.setState({count: this.state.count-1})
        }>Decrement</button> */}
        <h2>Name: {name}</h2>
        <h2>Location: {location}</h2>
        <h2>Contact: @shasan419</h2>
      </div>
    );
  }
}

export default UserClass;
