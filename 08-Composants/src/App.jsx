import { createRoot } from "react-dom/client";
import SearchFields from "./SearchFields";
import Crypto from "./Crypto";
import { useState } from "react";
const App = () => {
  const [searchValue, setSearchValue] = useState("")
  return (
    <div className="container">
      <h1 className="title">Crypto Logos</h1>
      <SearchFields searchValue={searchValue} setSearchValue={setSearchValue}/>
      <Crypto searchValue={searchValue} />
    </div>
  );
};

const container = document.getElementById("app");
const root = createRoot(container);
root.render(<App />);
