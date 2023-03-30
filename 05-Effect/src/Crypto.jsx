import { useEffect, useState } from "react";
const Crypto = () => {
  const [cryptos, setCrypto] = useState([]);
  useEffect(() => {
    requestImages();
  }, []);

  // eslint-disable-line react-hooks/exhaustive-deps
  async function requestImages() {
    const apiRep = await fetch(
      "https://mongodb-image-api.vercel.app/api/listCryptoLogo"
    );
    const json = await apiRep.json();
    setCrypto(json);
  }

  return (
    <div>
      {cryptos.map((crypto) => (
        <div key={crypto.currency_long}>
          <h1>{crypto.currency_long}</h1>
          <h2>{crypto.currency_code}</h2>
        </div>
      ))}
    </div>
  );
};
export default Crypto;
