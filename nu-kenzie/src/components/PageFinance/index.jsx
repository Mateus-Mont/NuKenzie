import { useState } from "react";
import { ListFinance } from "./ListFinance";
import { Header } from "./Header";
import { ValueTotal } from "./ValueTotal";
import { SelectType } from "./SelectType";
import { InputDescription } from "./InputDescription";
import { InputValue } from "./InputValue";

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
            <ListFinance filter={filter} finance={finance} />
          </ul>
        </div>
      </div>
    </>
  );
};
