import { useState } from "react";
import { Filter, Filtrar, ListFinance } from "./ListFinance";
import { Header } from "./Header";
import { ValueTotal } from "./ValueTotal";
import { SelectType } from "./SelectType";
import { InputDescription } from "./InputDescription";
import { InputValue } from "./InputValue";
import { Blank } from "./blank";

export const RenderFinance = ({ prop }) => {
  const [descriptionFinance, setDescription] = useState("");
  const [valueFinance, setValue] = useState("");
  const [typeFinance, setType] = useState("");
  const [finance, setFinance] = useState([]);
  const [filter, setFilter] = useState([]);
  const [colorFilter, setColorFilter] = useState("Todos");

  const item = {
    id: finance.length,
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
    setFilter((oldFinances) => {
      return [...oldFinances, item];
    });
  }

  function todos() {
    setColorFilter("Todos");
    return setFilter(finance);
  }

  return (
    <>
      <header className="menu">
        <Header prop={prop} />
      </header>

      <div className="container-finance">
        <div className="launch">
          <div className="container-launch">
            <form onSubmit={submit}>
              <label className="labelDescription" htmlFor="">
                Descrição
              </label>

              <InputDescription
                descriptionFinance={descriptionFinance}
                setDescription={setDescription}
              />

              <small>Ex: Compra de roupas</small>
              <div className="value">
                <div>
                  <label htmlFor="">Valor</label>
                  <InputValue valueFinance={valueFinance} setValue={setValue} />
                </div>
                <div>
                  <label htmlFor="">Tipo de valor</label>
                  <SelectType typeFinance={typeFinance} setType={setType} />
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
                  <ValueTotal finance={finance} />
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
                <button
                  className={`${colorFilter === "Todos" && "buttonFiltered"}`}
                  onClick={todos}
                >
                  Todos
                </button>
                <button
                  className={`${colorFilter==="Entrada" && "buttonFiltered"}`}
                  onClick={() => {
                    setColorFilter("Entrada");
                    setFilter(
                      finance.filter((elem) => elem.type === "Entrada")
                    );
                  }}
                >
                  Entradas
                </button>
                <button
                  className={`${colorFilter === "Saída" && "buttonFiltered"}`}
                  onClick={() => {
                    setColorFilter("Saída");
                    setFilter(finance.filter((elem) => elem.type === "Saída"));
                  }}
                >
                  Despesas
                </button>
              </div>
            </div>
          </div>
          <ul>
            {filter.length === 0 ? (
              <Blank />
            ) : (
              <ListFinance
                filter={filter}
                finance={finance}
                setFilter={setFilter}
                setFinance={setFinance}
              />
            )}
          </ul>
        </div>
      </div>
    </>
  );
};
