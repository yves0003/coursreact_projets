import React from "react"
import { useParams } from "react-router-dom"
import useGetImages from "./hooks/useGetImages"

const Infos = () => {
  const { id } = useParams()
  const [status, cryptos] = useGetImages(id)
  console.log(id, status, cryptos)
  return status === "loaded" ? (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        marginTop: "2rem",
      }}
    >
      <img src={cryptos[0].link} alt={cryptos[0].currency_long} />
      <div style={{ paddingLeft: "1rem" }}>
        <p>
          Nom long: <b>{cryptos[0].currency_long}</b>
        </p>
        <p>
          Code: <b>{cryptos[0].currency_code}</b>
        </p>
      </div>
    </div>
  ) : (
    <div>Chargement...</div>
  )
}

export default Infos
