
import "./App.css";
import { RenderHome } from "./components/HomePage";
import { RenderFinance } from "./components/PageFinance";
import "./components/HomePage/homeStyles.css"
import "./components/PageFinance"
import "./components/PageFinance/Finance.css"

import { useState } from "react";

function App() {
  
  const [page, setPage] = useState(true);
  
  return (
    <>
      {page ? <RenderHome prop={setPage} /> : <RenderFinance prop={setPage} />}
    </>
  );
}

export default App;
