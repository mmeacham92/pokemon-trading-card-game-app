import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";

import SetsList from "./components/sets/SetsList";
import CardList from "./components/cards/CardList";
import "./App.css";

function App() {
  const [sets, setSets] = useState([]);
  const [currentSet, setCurrentSet] = useState({});
  const [cardList, setCardList] = useState([]);
  const [currentCard, setCurrentCard] = useState({});

  useEffect(() => {
    fetchSets();
  }, []);

  useEffect(() => {
    fetchCards();
  }, []);

  const fetchSets = async () => {
    const data = await fetch("https://api.pokemontcg.io/v1/sets");
    const fetchedSets = await data.json();
    console.log(fetchedSets.sets);
    setSets(fetchedSets.sets);
  };

  const fetchCards = async (currentSet) => {
    const data = await fetch(
      `https://api.pokemontcg.io/v1/cards?set=${currentSet}`
    );
    const fetchedCards = await data.json();
    console.log(fetchedCards);
  };
  return (
    <div className="App">
      <SetsList
        sets={sets}
        setSets={setSets}
        currentSet={currentSet}
        setCurrentSet={setCurrentSet}
        cardList={cardList}
        setCardList={setCardList}
      />
      <CardList
        cardList={cardList}
        setCardList={setCardList}
        currentCard={currentCard}
        setCurrentCard={setCurrentCard}
      />
    </div>
  );
}

export default App;
