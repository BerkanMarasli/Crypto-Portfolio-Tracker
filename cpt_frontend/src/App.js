// https://docs.coincap.io/ => main crypto information
// ^^ https://github.com/spothq/cryptocurrency-icons => crypto logos
// ^^ https://cryptologos.cc/

import "./App.css"
import Button from "./components/Button"
import { useState } from "react"
import CryptoInfo from "./components/CryptoInfo"

export default function App() {
  const [isClickedViewAllCrypto, setIsClickedViewAllCrypto] = useState(false)
  const [allCryptoData, setAllCryptoData] = useState([])

  return (
    <div className="App">
      <p>Crypto Portfolio Tracker</p>
      <br />
      <Button
        nameOfButton="View all CRYPTOCURRENCIES"
        handleClick={handleViewAllCryptoClick}
        setIsClickedState={setIsClickedViewAllCrypto}
        setData={setAllCryptoData}
      />
      <br />
      {isClickedViewAllCrypto === true ? allCryptoData : null}
    </div>
  )
}

async function handleViewAllCryptoClick(setIsClickedViewAllCrypto, setAllCryptoData) {
  setIsClickedViewAllCrypto(true)
  const URL = "https://api.coincap.io/v2/assets"
  const data = await getDataFromCoinCapAPI(URL)
  const allCryptoData = data.data
  const allCryptoDataDisplay = allCryptoData.map(cryptoInfo => {
    return <CryptoInfo key={cryptoInfo.id} data={cryptoInfo} />
  })
  setAllCryptoData(allCryptoDataDisplay)
}

async function getDataFromCoinCapAPI(url) {
  let response
  let dataFound = false
  while (!dataFound) {
    try {
      response = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer 5d7f001c-d807-4046-bcca-dfe169fa1ca1",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "DELETE, POST, GET, OPTIONS, PUT, PATCH",
          "Access-Control-Allow-Headers":
            "Origin, Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With, append, delete, entries, foreach, get, has, keys, set, values, Authorization",
        },
      })
      dataFound = true
    } catch (error) {
      console.log(error)
    }
  }
  return await response.json()
}
