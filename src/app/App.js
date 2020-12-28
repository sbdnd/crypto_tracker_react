import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import HeroSection from "../heroSection/HeroSection";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Sidebar from "../sideBar/Sidebar";
import Coin from "../coin/Coin";
import Contact from "../contact/Contact";
import CoinsList from "../coins/CoinsList";

function App() {
  // [coins] = tableau d'objet représentant les cryptos monnaies
  const [coins, setCoins] = useState([]);
  // search = valeur permettant de filtrer le tableau de cryptos monnaies
  const [search, setSearch] = useState("");
  // indexURL prend la valeur de l'index figurant dans l'url au clic sur une crypto monnaie
  const [indexURL, setIndexURL] = useState("");

  // récupère les données via l'API coingecko
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

  // filtre les données en fonction du nom de la crypto monnaie
  const filteredCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <Router>
        <Sidebar />
        <Route exact path="/" component={HeroSection} />
        {/* affichage de toutes les cryptos monnaies */}
        <Route
          exact
          path="/coins"
          render={(props) => (
            <CoinsList
              {...props}
              setSearch={setSearch}
              filteredCoins={filteredCoins}
              setIndexURL={setIndexURL}
            />
          )}
        />
        {/* affichage de la crypto monnaie cliquée */}
        <Route
          exact
          path={`/coins/${indexURL}`}
          render={() => (
            <Coin filteredCoins={filteredCoins} indexURL={indexURL} />
          )}
        />
        <Route exact path="/contact-me" component={Contact} />
      </Router>
    </>
  );
}

export default App;
