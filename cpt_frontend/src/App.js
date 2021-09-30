import "./App.css";
import Button from "./components/Button";
import { useState } from "react";
import CryptoInfo from "./components/CryptoInfo";

export default function App() {
  const [isClickedViewAllCrypto, setIsClickedViewAllCrypto] = useState(false);
  const [isClickedViewBitcoin, setIsClickedViewBitcoin] = useState(false);
  const [bitcoinData, setBitcoinData] = useState({});
  const [allCryptoData, setAllCryptoData] = useState([]);

  return (
    <div className="App">
      <p>APPLICATION</p>
      <p>HELLO</p>
      <Button
        nameOfButton="View Bitcoin"
        handleClick={handleViewBitcoinClick}
        setIsClickedState={setIsClickedViewBitcoin}
        setData={setBitcoinData}
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
    </div>
  );
}

async function handleViewBitcoinClick(setIsClickedViewBitcoin, setBitcoinData) {
  setIsClickedViewBitcoin(true);
  const URL = "https://api.coincap.io/v2/assets/bitcoin";
  const data = await getDataFromCoinCapAPI(URL);
  const bitcoinData = data.data;
  setBitcoinData(bitcoinData);
}

async function handleViewAllCryptoClick(
  setIsClickedViewAllCrypto,
  setAllCryptoData
) {
  setIsClickedViewAllCrypto(true);
  const URL = "https://api.coincap.io/v2/assets";
  const data = await getDataFromCoinCapAPI(URL);
  const allCryptoData = data.data;
  // console.log("handleViewAllClick data: ", allCryptoData);
  // allCryptoData.forEach((ele) => console.log(ele));
  const allCryptoDataDisplay = allCryptoData.map((cryptoInfo) => {
    return <p key={cryptoInfo.id}>{cryptoInfo.name}</p>;
  });
  console.log("Setting state: ", allCryptoDataDisplay);
  setAllCryptoData(allCryptoDataDisplay);
}

async function getDataFromCoinCapAPI(url) {
  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer 5d7f001c-d807-4046-bcca-dfe169fa1ca1",
        "Access-Control-Allow-Headers": "Origin",
        "Access-Control-Allow-Origin": "*",
      },
    });
    return await response.json();
  } catch (error) {
    console.log(error);
  }
}
