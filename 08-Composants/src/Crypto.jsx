import ImageBlock from "./ImageBlock";
import useGetImages from "./useGetImages";

const Crypto = ({searchValue}) => {
 const [status, cryptos] = useGetImages(searchValue)
  return (
    <div className="ListImageContainer">
      {status!== "loaded" && <div>Chargement....</div>}
      {status === "loaded" && cryptos.map((crypto) => (
        <div key={crypto.currency_long} className="imageWrapper">
          <ImageBlock crypto={crypto}>
            <div style={{ fontWeight: "500" }}>
              {crypto.currency_long}
            </div>
          </ImageBlock>
        </div>
      ))}
    </div>
  );
};
export default Crypto;