import logo from "./logo.svg";
import "./App.css";
import { RenderHome } from "./components";
import { RenderFinance } from "./components/Finance";
import "./components/homeStyles.css";
import "./components/Finance.css";
import { useState } from "react";

function App() {
  const [page, setPage] = useState(true);
  return <>{page ? <RenderHome  prop={setPage} /> : <RenderFinance prop={setPage} />}</>;
}

export default App;
