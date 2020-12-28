import React from "react";
import "./Form.css";

const Form = (props) => {
  return (
    <>
      <div className="coin-search">
        <h1 className="coin-text">Recherche ta Crypto</h1>
        <form>
          <input
            type="text"
            className="coin-input"
            placeholder="Rechercher"
            onChange={props.handleChange}
          />
        </form>
      </div>
    </>
  );
};

export default Form;
