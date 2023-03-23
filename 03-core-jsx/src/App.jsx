import { createRoot } from "react-dom/client";
import Crypto from "./Crypto";

const App = () => {
  return (
    <div>
      <h1>Liste des cryptos</h1>
      <Crypto name="Etherium" code="ETH" />
      <Crypto name="Bitcoin" code="BTC" />
      <Crypto name="Cardano" code="ADA" />
    </div>
  );
};

const container = document.getElementById("app");
const root = createRoot(container);
root.render(<App />);
