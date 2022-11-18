import img from "../assets/NoCard.png";

export const RenderFinance = ({ prop }) => {
  return (
    <>
      <div className="menu">
        <div className="header">
          <h1>
            <span>Nu</span> Kenzie
          </h1>
          <button onClick={() => prop(true)} className="return">
            Início
          </button>
        </div>
      </div>
      <div className="container-finance">
        <div className="launch">
          <div className="container-launch">
            <form action="">
              <label className="labelDescription" htmlFor="">Descrição</label>
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
            <h4>Você ainda não possui nenhum lançamento</h4>
            <img className="imgFinance" src={img} alt="" />
          </ul>
        </div>
      </div>
    </>
  );
};
