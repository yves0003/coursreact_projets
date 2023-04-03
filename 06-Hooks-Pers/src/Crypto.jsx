import useGetImages from "./useGetImages";

const Crypto = () => {
 const [status, cryptos] = useGetImages("")
  return (
    <div>
      {status!== "loaded" && <div>Chargement....</div>}
      {status === "loaded" && cryptos.map((crypto) => (
        <div key={crypto.currency_long}>
          <h1>{crypto.currency_long}</h1>
          <h2>{crypto.currency_code}</h2>
        </div>
      ))}
    </div>
  );
};
export default Crypto;