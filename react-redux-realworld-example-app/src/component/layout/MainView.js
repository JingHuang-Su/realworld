// get all of article from backend, and pass data into the MainViewCard.js

import React from "react";
import { connect } from "react-redux";

const YourFeedTab = props => {
  if (props.token) {
    return (
      <li className="nav-item">
        <a
          href=""
          className={props.tab === "feed" ? "nav-link active" : "nav-link"}
          onClick={clickHandler}
        >
          Your Feed
        </a>
      </li>
    );
  }
  return null;
};
