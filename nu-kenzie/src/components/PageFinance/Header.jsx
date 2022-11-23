const Header = ({prop}) => {
  return (
    <div className="header">
      <h1>
        <span>Nu</span> Kenzie
      </h1>
      <button onClick={() => prop(true)} className="return">
        Início
      </button>
    </div>
  );
};
export { Header };
