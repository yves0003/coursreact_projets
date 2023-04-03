import { createRoot } from "react-dom/client"
import { useState } from "react"
import SearchFields from "./components/SearchFields"
import Crypto from "./components/Crypto"
const App = () => {
  const [searchValue, setSearchValue] = useState("")
  return (
    <div className="container">
      <h1 className="title">Crypto Logos</h1>
      <SearchFields searchValue={searchValue} setSearchValue={setSearchValue} />
      <Crypto searchValue={searchValue} />
    </div>
  )
}

const container = document.getElementById("app")
const root = createRoot(container)
root.render(<App />)
