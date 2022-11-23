const InputValue = ({valueFinance,setValue})=>{
    return(
        <input
        value={valueFinance}
        required
        onChange={(event) => setValue(parseInt(event.target.value))}
        placeholder="R$"
        className="valueDescription"
        type="number"
      />
    )

}

export{InputValue}