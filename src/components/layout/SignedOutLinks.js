import React from "react";
import { NavLink } from "react-router-dom";

const SignedOutLinks = () => {
  return (
    <ul className="right">
      <li>
        <NavLink to="/Signup">Signup</NavLink>
      </li>
      <li>
        <NavLink to="/Signin">Login</NavLink>
      </li>
    </ul>
  );
};

export default SignedOutLinks;
