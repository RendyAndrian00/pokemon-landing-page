import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const BackComponent = () => {
  return (
    <div className="mt-3 mb-3">
      <Link to={"/"}>
        <button className="btn btn-danger shadow">
          <FontAwesomeIcon icon={faArrowLeft} /> Back
        </button>
      </Link>
    </div>
  );
};

export default BackComponent;
