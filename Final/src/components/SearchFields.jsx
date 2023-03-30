const SearchFields = ({ searchvalue, setSearchValue }) => {
  return (
    <div className="inputContainer">
      <input
        id="inputCrypto"
        type="text"
        value={searchvalue}
        onChange={(e) => {
          setSearchValue(e.currentTarget.value);
        }}
        placeholder=" "
      />
      <label htmlFor="inputCrypto">
        <p>Chercher une crypto dans la liste</p>
      </label>
    </div>
  );
};

export default SearchFields;
