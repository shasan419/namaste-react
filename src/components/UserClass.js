import React from "react";
import { USER_URL } from "../utils/constants";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        // count: 0,
        userInfo: {
            name: "",
            location: "",
            avatar_url: ""
        }
    }
  }

  async componentDidMount(){
    const data = await fetch(USER_URL);
    const json = await data.json();
    this.setState({
        userInfo: json,
    })
  }

  render() {
    const {userLoggedIn} = this.props;
    // const {count} = this.state;
    const {location, avatar_url} = this.state.userInfo;

    return (
        userLoggedIn ? (
          <div className="flex border border-amber-600 rounded-xl p-16 m-auto max-w-2xl justify-around">
            {/* <h1>Count : {count}</h1> */}
            {/* <button onClick={() => 
                this.setState({count: this.state.count+1})
            }>Increment</button>
            <button onClick={() => 
                this.setState({count: this.state.count-1})
            }>Decrement</button> */}
            <img src={avatar_url?avatar_url:null} className="w-58 h-58"/>
            <div className="text-center self-center">
            <h2 className="text-2xl font-bold text-amber-600">Name: {userLoggedIn}</h2>
            <h2 className="text-2xl font-semibold">Location: {location}</h2>
            <h2 className="text-2xl font-semibold">Contact: shasan419@gmail.com</h2>

            </div>
          </div>
        ) : (
          <h1 className="textxl font-bold text-center">Click on Login button in header to view user details</h1>
        ) 
    );
  }
}

export default UserClass;
