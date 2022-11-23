const SelectType = ({ typeFinance, setType }) => {
  return (
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
  );
};

export { SelectType };
