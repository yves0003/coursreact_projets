import React from "react"
import { useParams } from "react-router-dom"

const Infos = () => {
  const { id } = useParams()
  return <div>{id}</div>
}

export default Infos
