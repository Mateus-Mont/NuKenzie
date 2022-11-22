import trash from "../../assets/trash.png";
import { useState } from "react";
import { Blank } from "../blank";

export const RenderFinance = ({ prop }) => {
  const [descriptionFinance, setDescription] = useState("");
  const [valueFinance, setValue] = useState("");
  const [typeFinance, setType] = useState("");

  const [finance, setFinance] = useState([]);
  const [filter, setFilter] = useState(finance);
  const item = {
    description: descriptionFinance,
    value: valueFinance,
    type: typeFinance,
  };

  function submit(event) {
    event.preventDefault();
    setFinance((oldFinances) => {
      return [...oldFinances, item];
    });
    setDescription("");
    setValue("");
    setType("");
    setFilter(finance);
  }

  function todos() {
    return setFilter(finance);
  }

  return (
    <>
      <header className="menu">
        <div className="header">
          <h1>
            <span>Nu</span> Kenzie
          </h1>
          <button onClick={() => prop(true)} className="return">
            Início
          </button>
        </div>
      </header>
      <div className="container-finance">
        <div className="launch">
          <div className="container-launch">
            <form onSubmit={submit}>
              <label className="labelDescription" htmlFor="">
                Descrição
              </label>
              <input
                value={descriptionFinance}
                required
                onChange={(event) => setDescription(event.target.value)}
                className="description"
                type="text"
                placeholder="Digite aqui sua descrição"
              />
              <small>Ex: Compra de roupas</small>
              <div className="value">
                <div>
                  <label htmlFor="">Valor</label>
                  <input
                    value={valueFinance}
                    required
                    onChange={(event) => setValue(parseInt(event.target.value))}
                    placeholder="R$"
                    className="valueDescription"
                    type="number"
                  />
                </div>
                <div>
                  <label htmlFor="">Tipo de valor</label>
                  <select
                    value={typeFinance}
                    required
                    onChange={(event) => setType(event.target.value)}
                  >
                    <option value="" hidden>
                      Selecionar
                    </option>
                    <option value="Saída">Saída</option>;
                    <option value="Entrada">Entrada</option>
                  </select>
                </div>
              </div>
              <button className="buttonValue">Inserir Valor</button>
            </form>
          </div>
          <div className="valueTotal">
            <div>
              <h3>Valor total:</h3>
              <p>
                <strong>
                  ${" "}
                  {finance.reduce((antes, depois) => {
                    if (depois.type === "Entrada") {
                      return antes + depois.value;
                    } else {
                      return antes - depois.value;
                    }
                  }, 0)}
                </strong>
              </p>
            </div>
            <p>O valor se refere ao saldo</p>
          </div>
        </div>
        <div className="datasFinance">
          <div>
            <div className="button-header">
              <strong>Resumo financeiro</strong>
              <div className="list-Buttons">
                <button onClick={todos}>Todos</button>
                <button
                  onClick={() => {
                    setFilter(
                      finance.filter((elem) => elem.type === "Entrada")
                    );
                  }}
                >
                  Entradas
                </button>
                <button
                  onClick={() => {
                    setFilter(finance.filter((elem) => elem.type === "Saída"));
                  }}
                >
                  Despesas
                </button>
              </div>
            </div>
          </div>
          <ul>
            <Render filter={filter} finance={finance} />
          </ul>
        </div>
      </div>
    </>
  );
};

const Render = ({ filter,finance }) => {
  console.log(finance)
  if (finance.length === 0) {
   return  <Blank />;
  } 
    return (
      <>
        {filter.map((elem, index) => (

          <li key={index} >
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
