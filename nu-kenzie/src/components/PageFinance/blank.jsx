import img from "../../assets/NoCard.png";

const Blank = () => {
  return (
    <div>
      <>
        <h3>Você não possui nenhum lançamento</h3>
        <img className="imgFinance" src={img} alt="" />
      </>
    </div>
  );
};

export { Blank };
