import SetButton from "./SetButton";

const SetsList = ({
  sets,
  currentSet,
  setCurrentSet,
  cardList,
  setCardList,
  fetchCards,
}) => {
  const buttons = sets
    .sort((a, b) => (a.name > b.name ? 1 : -1))
    .map((set) => {
      return (
        <SetButton
          key={set.code}
          name={set.name}
          sets={sets}
          currentSet={currentSet}
          setCurrentSet={setCurrentSet}
          cardList={cardList}
          setCardlist={setCardList}
          fetchCards={fetchCards}
        />
      );
    });
  return <div className="sets__container">{buttons}</div>;
};

export default SetsList;
