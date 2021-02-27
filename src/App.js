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

  const fetchSets = async () => {
    const data = await fetch("https://api.pokemontcg.io/v1/sets");
    const fetchedSets = await data.json();
    // console.log(fetchedSets.sets);
    setSets(fetchedSets.sets);
  };

  const fetchCards = async (currentSet) => {
    const data = await fetch(
      `https://api.pokemontcg.io/v1/cards?setCode=${currentSet.code}`
    );
    const fetchedCards = await data.json();
    console.log(fetchedCards.cards);
    setCardList(fetchedCards.cards);
  };

  useEffect(() => {
    fetchCards(currentSet);
  }, [currentSet]);

  return (
    <div className="App">
      <SetsList
        sets={sets}
        setSets={setSets}
        currentSet={currentSet}
        setCurrentSet={setCurrentSet}
        cardList={cardList}
        setCardList={setCardList}
        fetchCards={fetchCards}
      />
      <CardList
        cardList={cardList}
        setCardList={setCardList}
        currentCard={currentCard}
        setCurrentCard={setCurrentCard}
        currentSet={currentSet}
      />
    </div>
  );
}

export default App;
