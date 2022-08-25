import React from "react";
import {Link} from "react-router-dom"

const SideMenuItem = ({keyword, path}) => {
  return (
    <li>
      <Link to={`${path}`} className="hover:text-p2">
        {keyword}
      </Link>
    </li>
  );
};

export default SideMenuItem;
