import { createRoot } from "react-dom/client"
import { useState } from "react"
import SearchFields from "./components/SearchFields"
import Crypto from "./components/Crypto"
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Infos from "./Infos"

const App = () => {
  const [searchValue, setSearchValue] = useState("")
  return (
    <div className="container">
      <BrowserRouter>
        <Link style={{ textDecoration: "none" }} to="/">
          <h1 className="title">Crypto Logos</h1>
        </Link>

        <Routes>
          <Route path="/infos/:id" element={<Infos />} />
          <Route
            path="/"
            element={
              <>
                <SearchFields searchValue={searchValue} setSearchValue={setSearchValue} />
                <Crypto searchValue={searchValue} />
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

const container = document.getElementById("app")
const root = createRoot(container)
root.render(<App />)
