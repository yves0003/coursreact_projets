import { FC } from "react";
import ImageBlock from "./ImageBlock";
import useGetImages from "../hooks/useGetImages";
import { Link } from "react-router-dom";

const Crypto: FC<{ searchValue: string }> = ({ searchValue }) => {
  const results = useGetImages(searchValue);
  return (
    <div className="ListImageContainer">
      {results.isLoading && <div>Chargement....</div>}
      {!results.isLoading &&
        results.data &&
        results.data.map((crypto) => (
          <Link
            key={crypto.currency_long}
            to={`/infos/${crypto.currency_code}`}
          >
            <ImageBlock crypto={crypto} />
          </Link>
        ))}
      {!results.isLoading && results.data && <div>Aucune Donnée</div>}
    </div>
  );
};
export default Crypto;
