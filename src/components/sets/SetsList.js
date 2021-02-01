import SetButton from "./SetButton";

const SetsList = ({ sets, currentSet, setCurrentSet, cardList, setCardList }) => {
  const buttons = sets.map((set) => {
    return (
      <SetButton
        name={set.name}
        currentSet={currentSet}
        setCurrentSet={setCurrentSet}
        cardList={cardList}
        setCardlist={setCardList}
      />
    );
  });
  return (
    <div className="sets__container">
      {buttons}
    </div>
  );
};

export default SetsList;
