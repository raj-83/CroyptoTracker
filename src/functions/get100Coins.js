import axios from "axios";


export const get100Coins = () => {

  const x =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false";

  const myCoins = axios
      .get(x)
      .then((response) => {
        return response.data;
      })

      .catch((error) => {
        console.log(error);
        
      });

      return myCoins;
}