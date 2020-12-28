// import Axios from "axios";
import React from "react";
import Coins from "./Coins";
import Form from "../searchForm/Form";

const CoinsList = (props) => {
  // récupère la valeur tapée dans la barre de recherche
  const handleChange = (e) => {
    props.setSearch(e.target.value);
  };

  return (
    <>
      {/* formulaire de recherche */}
      <Form handleChange={handleChange} />
      {/* affichage de toutes les cryptos monnaies filtrées */}
      {props.filteredCoins.map((coin, index) => {
        return (
          coin.price_change_percentage_24h && (
            <Coins
              {...props}
              key={coin.id}
              name={coin.name}
              image={coin.image}
              symbol={coin.symbol}
              marketcap={coin.market_cap}
              price={coin.current_price}
              priceChange={coin.price_change_percentage_24h}
              volume={coin.total_volume}
              handleChange={handleChange}
              setIndexURL={props.setIndexURL}
              index={index}
            />
          )
        );
      })}
    </>
  );
};

export default CoinsList;
