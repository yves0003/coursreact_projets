import { useEffect, useState } from "react"
import filterfunc from "../helpers/filterfunc"

let localCache = []

const useGetImages = (filter = "") => {
  const [cryptos, setCrypto] = useState([])
  const [status, setStatus] = useState("unloaded")
  useEffect(() => {
    if (localCache.length === 0) {
      requestImages()
    } else if (localCache.length > 0) {
      setCrypto(localCache.filter(filterfunc(filter)))
    }
    // eslint-disable-line react-hooks/exhaustive-deps
    async function requestImages() {
      const apiRep = await fetch("https://mongodb-image-api.vercel.app/api/listCryptoLogo")
      const json = await apiRep.json()
      setCrypto(json.filter(filterfunc(filter)))
      localCache = json || []
      setCrypto(json)
      setStatus("loaded")
    }
  }, [filter])
  return [status, cryptos]
}

export default useGetImages
