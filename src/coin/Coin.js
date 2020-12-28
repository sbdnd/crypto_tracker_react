import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { BiLineChart } from "react-icons/bi";
import { BiLineChartDown } from "react-icons/bi";
import { IoIosArrowBack } from "react-icons/io";
import "./Coin.css";

const Coin = (props) => {
  return (
    <>
      {/* affichage de la crypto dont l'index du tableau [coins] match avec indexURL */}
      {props.filteredCoins.map((coin, index) => {
        return (
          index.toString() === props.indexURL &&
          coin.price_change_percentage_24h && (
            <Fragment key={coin.id}>
              <div className="coin-display-bg">
                <div className="coin-display-container">
                  <Link to="/coins" className="btn-return">
                    <IoIosArrowBack />
                  </Link>
                  <div className="coin-display-image">
                    <img src={coin.image} alt="crypto" />
                  </div>
                  <div className="coin-display-name">
                    <h1 className="coin-display-title">{coin.name}</h1>
                    <p className="coin-display-symbol">{coin.symbol}</p>
                  </div>
                  <div className="coin-display-data">
                    <p className="coin-display-price">
                      {coin.current_price.toLocaleString()} €
                    </p>
                    <div className="coin-data-trend">
                      {coin.price_change_percentage_24h < 0 ? (
                        <p className="coin-display-percentage red">
                          {coin.price_change_percentage_24h.toFixed(2)} %
                        </p>
                      ) : (
                        <p className="coin-display-percentage green">
                          {coin.price_change_percentage_24h.toFixed(2)} %
                        </p>
                      )}
                      <div className="coin-trend">
                        {coin.price_change_percentage_24h < 0 ? (
                          <p className="trend-down red">
                            <BiLineChartDown />
                          </p>
                        ) : (
                          <p className="trend-up green">
                            <BiLineChart />
                          </p>
                        )}
                      </div>
                    </div>
                    <p className="coin-display-volume">
                      Volume : {coin.total_volume.toLocaleString()} €
                    </p>
                    <p className="coin-display-marketcap">
                      Market-cap : {coin.market_cap.toLocaleString()} €
                    </p>
                  </div>
                </div>
              </div>
            </Fragment>
          )
        );
      })}
    </>
  );
};

export default Coin;
