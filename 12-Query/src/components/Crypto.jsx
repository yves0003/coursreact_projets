import ImageBlock from "./ImageBlock"
import useGetImages from "../hooks/useGetImages"
import { Link } from "react-router-dom"

const Crypto = ({ searchValue }) => {
  const [status, cryptos] = useGetImages(searchValue)
  return (
    <div className="ListImageContainer">
      {status !== "loaded" && <div>Chargement....</div>}
      {status === "loaded" &&
        cryptos.map(crypto => (
          <Link to={`/infos/${crypto.currency_code}`}>
            <ImageBlock key={crypto.currency_long} crypto={crypto} />
          </Link>
        ))}
    </div>
  )
}
export default Crypto
