import { Blank } from "./blank.jsx";
import trash from "../../assets/trash.png";

const ListFinance = ({ filter, finance, setFilter, setFinance }) => {
  console.log(filter)
  console.log(finance)

  function remove(elem) {
    let financeFiltered = finance.filter((finance) => {
      return finance.id !== elem.id;
    });
    setFinance(financeFiltered);
    setFilter(financeFiltered)
  }

  return (
    <>
      {filter.map((elem, index) => (
        <li className={`${elem.type=== "Saída" && "valueExpense"}`} key={index} >
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
