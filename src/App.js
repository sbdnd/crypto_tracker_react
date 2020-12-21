import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Coins from "./Coins";
import HeroSection from "./HeroSection";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Form from "./Form";
import Navbar from "./Navbar";

function App() {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=100&page=1&sparkline=false"
      )
      .then((res) => {
        setCoins(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const filteredCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <Router>
        <Navbar />
        <Route exact path="/" component={HeroSection} />
        {/* <Route exact path="/started" component={Navbar} /> */}
        <Route
          exact
          path="/started"
          render={() => <Form handleChange={handleChange} />}
        />
        <Route
          exact
          path="/started"
          render={(props) => {
            return filteredCoins.map((coin) => {
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
                  />
                )
              );
            });
          }}
        />
      </Router>
    </>
  );
}

export default App;
