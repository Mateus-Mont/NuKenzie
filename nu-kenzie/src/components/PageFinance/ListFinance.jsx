import { Blank } from "./blank.jsx";
import trash from "../../assets/trash.png";

const ListFinance = ({ filter, finance }) => {
  if (finance.length === 0) {
    return <Blank />;
  }
  return (
    <>
      {filter.map((elem, index) => (
        <li key={index}>
          <div className="salary">
            <h3>{elem.description}</h3>
            <div className="divValue">
              <p>R$ {elem.value}</p>
              <button className="imgTrash">
                <img value={elem.value} src={trash} alt=""></img>
              </button>
            </div>
          </div>
          <p>{elem.type}</p>
        </li>
      ))}
    </>
  );
};

export { ListFinance };
