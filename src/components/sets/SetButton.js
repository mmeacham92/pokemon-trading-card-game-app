const SetButton = ({ name, currentSet, setCurrentSet, cardList, setCardList }) => {
    const changeCardList = (e) => {
        setCurrentSet(name);
        // setCardList(currentSet);
    }
    console.log(currentSet);
  return (
    <button
      className={`set__button ${name.toLowerCase()}__button`}
      onClick={changeCardList}
      name={name}
    >
      {name}
    </button>
  );
};

export default SetButton;
