import ImageBlock from "./ImageBlock"
import useGetImages from "../hooks/useGetImages"
import { Link } from "react-router-dom"

const Crypto = ({ searchValue }) => {
  const results = useGetImages(searchValue)
  return (
    <div className="ListImageContainer">
      {results.isLoading && <div>Chargement....</div>}
      {!results.isLoading &&
        results.data.map(crypto => (
          <Link key={crypto.currency_long} to={`/infos/${crypto.currency_code}`}>
            <ImageBlock crypto={crypto} />
          </Link>
        ))}
    </div>
  )
}
export default Crypto
