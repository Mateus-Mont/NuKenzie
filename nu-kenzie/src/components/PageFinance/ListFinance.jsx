import { Blank } from "./blank.jsx";
import trash from "../../assets/trash.png";

const ListFinance = ({ filter, finance, setFinance }) => {
  function remove(elem) {
    let financeFiltered = finance.filter((finance) => {
      return finance.id !== elem.id;
    });
    setFinance(financeFiltered);
  }

  return (
    <>
      {finance.map((elem, index) => (
        <li key={index}>
          <div className="salary">
            <h3>{elem.description}</h3>
            <div className="divValue">
              <p>R$ {elem.value.toFixed(2)}</p>

              <img
                className="trash"
                onClick={() => remove(elem)}
                src={trash}
                alt=""
              ></img>
            </div>
          </div>
          <p>{elem.type}</p>
        </li>
      ))}
    </>
  );
};

export { ListFinance };
