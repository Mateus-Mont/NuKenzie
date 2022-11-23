const InputDescription = ({ descriptionFinance,setDescription }) => {
  return ( 
    <input
      value={descriptionFinance}
      required
      onChange={(event) => setDescription(event.target.value)}
      className="description"
      type="text"
      placeholder="Digite aqui sua descrição"
    />
  );
};

export { InputDescription };
