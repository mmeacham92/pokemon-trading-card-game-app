import React, { useEffect } from "react";

const SetButton = ({
  name,
  sets,
  currentSet,
  setCurrentSet,
  cardList,
  setCardList,
  fetchCards,
}) => {

  const updateSetList = e => {
    setCurrentSet(sets.find(set => set.name === e.target.name));
  }

  return (
    <button
      className={`set__button ${name.toLowerCase()}__button`}
      onClick={updateSetList}
      name={name}
    >
      {name}
    </button>
  );
};

export default SetButton;
