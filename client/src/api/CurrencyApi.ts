import axios from "axios";

export const CurrencyApi = {
  async getCurrency() {
    try {
      const response = await axios.get(
        "https://v6.exchangerate-api.com/v6/90bde5edaaf0d7f00f469cc1/latest/USD",
        {
          headers: {
            Authorization: `Bearer ${process.env.CURRENCY_API_KEY}`,
          },
        }
      );

      const currencyData = response.data;
      return currencyData.conversion_rates;
    } catch (error) {
      console.error("Error fetching currency data:", error);
    }
  },
};
