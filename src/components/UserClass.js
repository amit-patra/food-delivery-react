import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "Amit",
        location: "Bengaluru",
        avatar_url: "http://dummy-photo.com",
      },
    };
    // console.log(this.props.name+ " Child Constructor");
  }

  async componentDidMount() {
    // console.log(this.props.name+ " Child componentDidMount");
    // API Call
    const URL = "https://api.github.com/users/amit-patra";
    const data = await fetch(URL);
    const json = await data.json();
    this.setState({
      userInfo: json,
    });
  }

  componentDidUpdate() {
    console.log("componentDidUpdate");
  }

  componentWillUnmount() {
    console.log("componentWillUnmount");
  }

  render() {
    // const { name, location, contact } = this.props;
    const { name, location, avatar_url } = this.state.userInfo;

    return (
      <div className="user-details">
        <img src={avatar_url} />
        <h1>Name: {name}</h1>
        <h2>Location: {location}</h2>
        {/* <h3>Contact: {contact}</h3> */}
      </div>
    );
  }
}

/*
    * ----- MOUNTING --------
        construcotr (dummy)
        Render (Dummy)
            <HTML Dummy>
        Component Did Mount
            <API Call>
            <this.setState -> State variable is updated

    * ------ UPDATE ---------
        render (Api Data)
        <HTML (new API data)
        Componenet Did Update
*/

export default UserClass;
