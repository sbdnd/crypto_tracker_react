import React from "react";
import { Link } from "react-router-dom";
import "./Coins.css";

const Coins = (props) => {
  return (
    // au clic, insertion dans l'URL, de l'index de la crypto monnaie figurant dans le tableau [coins]
    <Link to={`${props.location.pathname}/${props.index}`}>
      <div
        className="coin-container"
        onClick={() => {
          // set la valeur d'indexURL à celle de l'index de la crypto cliquée
          props.setIndexURL(props.index.toString());
        }}
      >
        <div className="coin-row">
          <div className="coin">
            <img src={props.image} alt="crypto" />
            <h1>{props.name}</h1>
            <p className="coin-symbol">{props.symbol}</p>
          </div>
          <div className="coin-data">
            <p className="coin-price">{props.price} €</p>
            {props.priceChange < 0 ? (
              <p className="coin-percent red">
                {props.priceChange.toFixed(2)} %
              </p>
            ) : (
              <p className="coin-percent green">
                {props.priceChange.toFixed(2)} %
              </p>
            )}

            <p className="coin-volume">{props.volume.toLocaleString()} €</p>
            <p className="coin-marketcap">
              Mkt Cap: {props.marketcap.toLocaleString()} €
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Coins;
