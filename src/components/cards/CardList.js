const CardList = ({ cardList, currentSet }) => {
  if (cardList.length === 0) return '';
  return (
    <div className="card__table-div">
      <h1>Current Set: {currentSet.name}</h1>
      <table className='card__table'>
        <thead>
          <tr className='card__table-row'>
            <th>No.</th>
            <th>Card Name</th>
            <th>Type</th>
            <th>Rarity</th>
          </tr>
        </thead>
        <tbody>
          {cardList.sort((a, b) => parseInt(a.number) - parseInt(b.number)).map(card => {
            return (
              <tr className='card__table-row' key={card.id}>
                <td>{card.number}</td>
                <td>{card.name}</td>
                <td>{card.types ? card.types[0] : ''}</td>
                <td>{card.rarity}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>

  );
};

export default CardList;
