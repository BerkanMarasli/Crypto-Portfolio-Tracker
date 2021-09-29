import "./App.css";
import Button from "./components/Button";
import { useState } from "react";
import CryptoInfo from "./components/CryptoInfo";

export default function App() {
  const [isClickedViewAllCrypto, setIsClickedViewAllCrypto] = useState(false);
  const [isClickedViewBitcoin, setIsClickedViewBitcoin] = useState(false);
  const [bitcoinData, setBitcoinData] = useState({});

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
      />
      {isClickedViewBitcoin === true ? <CryptoInfo data={bitcoinData} /> : null}
      {isClickedViewAllCrypto === true ? (
        <h1>View All Button Clicked</h1>
      ) : null}
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

function handleViewAllCryptoClick(setIsClickedViewAllCrypto) {
  setIsClickedViewAllCrypto(true);
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
