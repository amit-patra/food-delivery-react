import { useState } from "react";
const User = (props) => {
  const { name, location, contact } = props;
  const [count] = useState(0);
  const [count2] = useState(1);
  return (
    <div className="user-details">
      <h1>Count: {count}</h1>
      <h1>Count2: {count2}</h1>
      <h1>Name: {name}</h1>
      <h2>Location: {location}</h2>
      <h3>Contact: {contact}</h3>
    </div>
  );
};

export default User;
