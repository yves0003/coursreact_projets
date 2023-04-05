import React from "react"
import { useParams } from "react-router-dom"
import useGetImages from "./hooks/useGetImages"

const Infos = () => {
  const { id } = useParams()
  const [status, cryptos] = useGetImages(id)
  return status === "loaded" ? (
    cryptos[0] ? (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "2rem",
        }}
      >
        <div
          style={{
            display: "flex",
            border: "solid 1px #D7D7D7",
            borderRadius: "8px",
            padding: "1rem",
            alignItems: "center",
            backgroundColor: "#F2F2F2",
          }}
        >
          <img src={cryptos[0].link} alt={cryptos[0].currency_long} />
          <div style={{ paddingLeft: "1rem" }}>
            <p>
              Nom: <b>{cryptos[0].currency_long}</b>
            </p>
            <p>
              Code: <b>{cryptos[0].currency_code}</b>
            </p>
          </div>
        </div>
      </div>
    ) : (
      <div>Le code n'existe pas</div>
    )
  ) : (
    <div>Chargement...</div>
  )
}

export default Infos
