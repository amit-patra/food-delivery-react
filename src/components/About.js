import { Component } from "react";
import UserClass from "./UserClass";

class About extends Component {
  constructor(props) {
    super(props);
    console.log("Parent Consturctor");
  }

  componentDidMount() {
    console.log("Parent componentDidMount");
  }

  render() {
    console.log("Parent Render");
    return (
      <div>
        <UserClass name="First" location="Bengaluru" contact="amit-patra" />
        {/* <UserClass name="Second" location="Hydrabad" contact="amit11-patra" /> */}
      </div>
    );
  }
}

export default About;

/*
    - Parent Consturctor
    - Parent Render
        - First Child Constructor
        - First Child Render

        -Second Child Construcotr
        -Second Child Render

  *  <DOM UPDATED  - IN SINGLE BATCH>  
        - First Child ComponentDidMount
        - Second Child ComponentDidMount
        - Parent ComponentDidMpount

*/
