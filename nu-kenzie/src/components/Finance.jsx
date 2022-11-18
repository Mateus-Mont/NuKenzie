import img from "../assets/NoCard.png";
import trash from "../assets/trash.png"

export const RenderFinance = ({ prop }) => {
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
            <form action="">
              <label className="labelDescription" htmlFor="">
                Descrição
              </label>
              <input
                className="description"
                type="text"
                placeholder="Digite aqui sua descrição"
              />
              <small>Ex: Compra de roupas</small>
              <div className="value">
                <div>
                  <label htmlFor="">Valor</label>
                  <input
                    placeholder="R$"
                    className="valueDescription"
                    type="number"
                  />
                </div>
                <div>
                  <label htmlFor="">Tipo de valor</label>
                  <select name="" id="">
                    <option value="">Entrada</option>
                    <option value="">Saída</option>
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
                <stong>$ 8456</stong>
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
                <button>Todos</button>
                <button>Entradas</button>
                <button>Despesas</button>
              </div>
            </div>
          </div>
          <ul>
          <li>
              <div className="salary">
                <h3>Sálario-Mês Dezembro</h3>
               <div className="divValue">
                <p>R$ 3.660.00</p>
                <button className="imgTrash"><img  src={trash} alt=""></img></button>
               </div>
              </div>
              <p>Entrada</p>
            </li>
            <li>
              <div className="salary">
                <h3>Sálario-Mês Dezembro</h3>
               <div className="divValue">
                <p>R$ 2.660.00</p>
                <button className="imgTrash"><img  src={trash} alt=""></img></button>
               </div>
              </div>
              <p>Entrada</p>
            </li>
            <li>
              <div className="salary">
                <h3>Sálario-Mês Dezembro</h3>
               <div className="divValue">
                <p>R$ 1.660.00</p>
                <button className="imgTrash"><img  src={trash} alt=""></img></button>
               </div>
              </div>
              <p>Entrada</p>
            </li>
            <li>
              <div className="salary">
                <h3>Sálario-Mês Dezembro</h3>
               <div className="divValue">
                <p>R$ 6.660.00</p>
                <button className="imgTrash"><img  src={trash} alt=""></img></button>
               </div>
              </div>
              <p>Entrada</p>
            </li>
        
          </ul>
        </div>
      </div>
    </>
  );
};
