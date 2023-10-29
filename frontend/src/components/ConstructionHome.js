import React, { useState } from "react";
import "./ConstructionHome.css";

import { Link } from "react-router-dom";

import Construction from "./Construction";
import ButterToast, { Cinnamon } from "butter-toast";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";
function ConstructionHome() {
  return (
    <div className="construction-form-container">
      <br></br>
      <h2 className="construction-form-header-add">Constructions Home Page</h2>
      <nav>
        <ul>
          <li>
            <Link to="/siteForm" className="button-link">
              Add Sites
            </Link>
          </li>
          <br></br>
          <li>
            <Link to="/siteDisplay" className="button-link">
              View Sites & Edit
            </Link>
          </li>
          <br></br>

          <li>
            <Link to="/form" className="button-link">
              Add Constructions
            </Link>
          </li>
          <br></br>
          <li>
            <Link to="/cus_construction" className="button-link">
              View Constructions
            </Link>
          </li>
          <br></br>
          <li>
            <Link to="/construction" className="button-link">
              Edit Constructions
            </Link>
          </li>
        </ul>
      </nav>
      <br></br>
    </div>
  );
}

export default ConstructionHome;
