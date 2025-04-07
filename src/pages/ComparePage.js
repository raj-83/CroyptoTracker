// import React, { useEffect } from "react";
// import Header from "../components/Common/Header";
// import SelectCoins from "../components/Compare/SelectCoins";
// import { useState } from "react";
// import SelectDays from "../components/Coin/SelectDays";
// import { coinObject } from "../functions/convertObject";
// import { getCoinPrices } from "../functions/getCoinPrices";
// import { getCoinData } from "../functions/getCoinData";
// import Loader from "../components/Common/Loader";

// const ComparePage = () => {
//   const [crypto1, setCrypto1] = useState("bitcoin");
//   const [crypto2, setCrypto2] = useState("ethereum");
//   const [days, setDays] = useState(30);
//   const [isLoading, setIsLoading] = useState(true);
//   const [priceType, setPriceType] = useState("prices");

//   const [crypto1Data, setCrypto1Data] = useState({});
//   const [crypto2Data, setCrypto2Data] = useState({});

//   // async function fetchChartData() {
//   //   setIsLoading(true);
//   //   const prices = await getCoinPrices(id, days, priceType);
//   //   if (prices) {
//   //     setChartData({
//   //       labels: prices.map((price) => convertDate(price[0])),
//   //       datasets: [
//   //         {
//   //           data: prices.map((price) => price[1]),
//   //           borderColor: "#3a80e9",
//   //           borderWidth: 2,
//   //           fill: true,
//   //           tension: 0.25,
//   //           backgroundColor: "rgba(58,128,233,0.1)",
//   //           pointRadius: 0,
//   //         },
//   //       ],
//   //     });
//   //     setIsLoading(false);
//   //   }
//   // }

//   function handleDaysChange(event) {
//     setDays(event.target.value);
//   }

//   useEffect(() => {
//     getData();
//   }, []);

//   async function getData() {
//     setIsLoading(true);
//     const data1 = await getCoinData(crypto1);
//     const data2 = await getCoinData(crypto2);
//     if (data1) {
//       coinObject(setCrypto1Data, data1);
//     }
//     if (data2) {
//       coinObject(setCrypto2Data, data2);
//     }

//     if (data1 && data2) {
//       const prices1 = await getCoinPrices(crypto1, days, priceType);
//       const prices2 = await getCoinPrices(crypto2, days, priceType);

//       if (prices1 && prices2) {
//         setIsLoading(false);
//       }
//     }
//   }

//   const handleCoinChange = async (e, isCoin2) => {
//     setIsLoading(true);
//     if (isCoin2) {
//       setCrypto2(e.target.value);
//       const data = await getCoinData(e.target.value);

//       coinObject(setCrypto2Data, data);
//     } else {
//       setCrypto1(e.target.value);
//       const data = await getCoinData(e.target.value);
//     }

//     const prices1 = await getCoinPrices(crypto1, days, priceType);
//     const prices2 = await getCoinPrices(crypto2, days, priceType);
//   };

//   return (
//     <div>
//       <Header />
//       {isLoading ? (
//         <Loader />
//       ) : (
//         <>
//           <div className="coins-days-flex">
//             <SelectCoins
//               crypto1={crypto1}
//               crypto2={crypto2}
//               handleCoinChange={handleCoinChange}
//             />
//             <SelectDays
//               days={days}
//               handleDaysChange={handleDaysChange}
//               noPTag={true}
//             />
//           </div>
//         </>
//       )}
//     </div>
//   );
// };

// export default ComparePage;
