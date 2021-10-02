// https://docs.coincap.io/ => main crypto information
// https://cryptoicons.org/ => crypto logos
// ^^ https://github.com/spothq/cryptocurrency-icons => crypto logos
// ^^ https://cryptologos.cc/

// import BITCOINLOGO from "./cryptoLogos/icon/btc.png"
import "./App.css"
import Button from "./components/Button"
import { useState } from "react"
import CryptoInfo from "./components/CryptoInfo"

export default function App() {
  const [isClickedViewAllCrypto, setIsClickedViewAllCrypto] = useState(false)
  const [isClickedViewBitcoin, setIsClickedViewBitcoin] = useState(false)
  const [bitcoinData, setBitcoinData] = useState({})
  const [allCryptoData, setAllCryptoData] = useState([])
  // const [bitcoinLogo, setBitcoinLogo] = useState("")

  return (
    <div className="App">
      <p>Crypto Portfolio Tracker</p>
      <br />
      <Button
        nameOfButton="View Bitcoin"
        handleClick={handleViewBitcoinClick}
        setIsClickedState={setIsClickedViewBitcoin}
        setData={setBitcoinData}
        // setLogo={setBitcoinLogo}
      />
      <Button
        nameOfButton="View all CRYPTOCURRENCIES"
        handleClick={handleViewAllCryptoClick}
        setIsClickedState={setIsClickedViewAllCrypto}
        setData={setAllCryptoData}
      />
      <br />
      {isClickedViewBitcoin === true ? <CryptoInfo data={bitcoinData} /> : null}
      {isClickedViewAllCrypto === true ? allCryptoData : null}
      {/* <img src={BITCOINLOGO} alt="IDK"></img> */}
    </div>
  )
}

async function handleViewBitcoinClick(setIsClickedViewBitcoin, setBitcoinData) {
  setIsClickedViewBitcoin(true)
  const URL = "https://api.coincap.io/v2/assets/bitcoin"
  const data = await getDataFromCoinCapAPI(URL)
  const bitcoinData = data.data
  setBitcoinData(bitcoinData)
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
  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer 5d7f001c-d807-4046-bcca-dfe169fa1ca1",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "DELETE, POST, GET, OPTIONS, PUT, PATCH",
        "Access-Control-Allow-Headers":
          "Origin, Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With",
      },
    })
    return await response.json()
  } catch (error) {
    console.log("COULDNT FETCH DATA")
    console.log(error)
  }
}

// async function getCryptoLogo(cryptoTicker) {
//   const ticker = cryptoTicker.toLowerCase()
//   const url = `https://cryptoicons.org/api/icon/${ticker}/32`
//   try {
//     const response = await fetch(url, {
//       method: "GET",
//       headers: {
//         "Access-Control-Allow-Origin": "*",
//         "Access-Control-Allow-Methods": "DELETE, POST, GET, OPTIONS, PUT, PATCH",
//         "Access-Control-Allow-Headers":
//           "Origin, Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With",
//       },
//     })
//     const logo = await response.blob()
//     const logoUrl = URL.createObjectURL(logo)
//     return logoUrl
//   } catch (error) {
//     console.log("COULDNT FETCH LOGO")
//     console.log(error)
//   }
// }
