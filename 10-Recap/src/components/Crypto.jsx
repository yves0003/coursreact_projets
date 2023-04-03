import ImageBlock from "./ImageBlock"
import useGetImages from "../hooks/useGetImages"

const Crypto = ({ searchValue }) => {
  const [status, cryptos] = useGetImages(searchValue)
  return (
    <div className="ListImageContainer">
      {status !== "loaded" && <div>Chargement....</div>}
      {status === "loaded" &&
        cryptos.map(crypto => <ImageBlock key={crypto.currency_long} crypto={crypto} />)}
    </div>
  )
}
export default Crypto
