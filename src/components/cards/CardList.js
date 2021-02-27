const CardList = ({ cardList, currentSet }) => {
  return (
    <div className="cards__list">
      <h1>Current Set: {currentSet.name}</h1>
      <ul>
        {cardList.map(card => {
            return <li key={card.id}>{card.name}</li>
        })}
      </ul>
    </div>
  );
};

export default CardList;
