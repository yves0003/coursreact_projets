import { createRoot } from "react-dom/client";
import SearchFields from "./SearchFields";

const App = () => {
  return (
    <div className="container">
      <h1 className="title">Crypto Logos</h1>
      <SearchFields />
    </div>
  );
};

const container = document.getElementById("app");
const root = createRoot(container);
root.render(<App />);
