import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Common/Header";
import axios from "axios";
import Loader from "../components/Common/Loader";
import { coinObject } from "../functions/convertObject";
import List from "../components/Dashboard/List";
import CoinInfo from "../components/Coin/CoinInfo";
import { getCoinData } from "../functions/getCoinData";
import { getCoinPrices } from "../functions/getCoinPrices";
import LineChart from "../components/Coin/LineChart";
import { convertDate } from "../functions/convertDate";
import SelectDays from "../components/Coin/SelectDays";
import { settingChartData } from "../functions/settingChartData";
import PriceType from "../components/Coin/PriceType";

function CoinPage() {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [coinData, setCoinData] = useState({});
  const [days, setDays] = useState(30);
  const [chartData, setChartData] = useState({});
  const [priceType, setPriceType] = useState("prices");

  useEffect(() => {
    if (id) {
      getData();
    }
  }, [id]);

  useEffect(() => {
    if (id && days) {
      fetchChartData();
    }
  }, [days]);

  async function getData() {
    const data = await getCoinData(id);

    if (data) {
      coinObject(setCoinData, data);
      await fetchChartData();
    }
  }

  async function fetchChartData() {
    setIsLoading(true);
    const prices = await getCoinPrices(id, days , priceType);
    if (prices) {
      setChartData({
        labels: prices.map((price) => convertDate(price[0])),
        datasets: [
          {
            data: prices.map((price) => price[1]),
            borderColor: "#3a80e9",
            borderWidth: 2,
            fill: true,
            tension: 0.25,
            backgroundColor: "rgba(58,128,233,0.1)",
            pointRadius: 0,
          },
        ],
      });
      setIsLoading(false);
    }
  }

  const handleDaysChange = (event) => {
    setDays(Number(event.target.value));
  };

  

  const handlePriceTypeChange = async (event, newType) => {
    setIsLoading(true);
    setPriceType(newType);
    const prices = await getCoinPrices(id , days , newType);
    if(prices ) {
      settingChartData(setChartData , prices);
      setIsLoading(false);
    }
  };

  return (
    <div>
      <Header />
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <div className="grey-wrapper" style={{ padding: "0rem 1rem" }}>
            <List coin={coinData} />
          </div>

          <div className="grey-wrapper">
            <SelectDays days={days} handleDaysChange={handleDaysChange} />
            <PriceType priceType={priceType} handlePriceTypeChange={handlePriceTypeChange}  />
            <div style={{ width: "90%" }}>
              <LineChart chartData={chartData} priceType={priceType} />
            </div>
          </div>

          {/* Conditional rendering to ensure `coinData` is defined */}
          {coinData.name ? (
            <CoinInfo heading={coinData.name} desc={coinData.desc} />
          ) : (
            <div>No data available</div>
          )}
        </>
      )}
    </div>
  );
}

export default CoinPage;
