import { useState } from "react";
const SearchFields = () => {
  const [searchvalue, setSearchValue] = useState("");
  return (
    <div className="inputContainer">
      <input
        id="inputCrypto"
        type="text"
        value={searchvalue}
        placeholder=" "
        onChange={(e) => setSearchValue(e.target.value)}
      />
      <label htmlFor="inputCrypto">
        <p>Chercher une crypto dans la liste</p>
      </label>
    </div>
  );
};

export default SearchFields;
