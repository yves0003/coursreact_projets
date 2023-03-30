import { createRoot } from "react-dom/client";
import SearchFields from "./SearchFields";
import Crypto from "./Crypto";
const App = () => {
  return (
    <div className="container">
      <h1 className="title">Crypto Logos</h1>
      <SearchFields />
      <Crypto />
    </div>
  );
};

const container = document.getElementById("app");
const root = createRoot(container);
root.render(<App />);
