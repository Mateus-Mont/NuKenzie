const ValueTotal = ({finance}) => {
  return (
    <>
      ${" "}
      {finance.reduce((antes, depois) => {
        if (depois.type === "Entrada") {
          return antes + depois.value;
        } else {
          return antes - depois.value;
        }
      }, 0).toFixed(2)}
    </>
  );
};

export { ValueTotal };
