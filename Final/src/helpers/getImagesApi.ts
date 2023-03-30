const getImagesApi = async () => {
  const apiRep = await fetch(
    "https://mongodb-image-api.vercel.app/api/listCryptoLogo"
  );
  if (!apiRep.ok) {
    throw new Error(`impossible d'importer les données`);
  }
  return apiRep.json();
};

export default getImagesApi;
