const CardList = ({ cardList, currentSet }) => {
  if (cardList.length === 0) return '';
  return (
    <div className="card__table-div">
      <h1>Current Set: {currentSet.name}</h1>
      <table className='card__table'>
        <thead>
          <tr>
            <th>No.</th>
            <th>Card Name</th>
            <th>Type</th>
            <th>Rarity</th>
          </tr>
        </thead>
        <tbody>
          {cardList.map(card => {
            return (
              <tr key={card.id}>
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
    // <div className="cards__list">
    //   <h1>Current Set: {currentSet.name}</h1>
    //   <ul class='card__list-item'>
    //     {cardList.map(card => {
    //         return <li key={card.id}>{card.name}</li>
    //     })}
    //   </ul>
    // </div>
  );
};

export default CardList;
