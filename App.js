const fetchData = (source, destination, date) => {
  const data = {
    flights: [
      {
        airline: "Indigo",
        price: "₹1,614"
      },
      {
        airline: "AirAsia",
        price: "₹1,869"
      },
      {
        airline: "Vistara",
        price: "₹2,133"
      }
    ]
  };

  return data.flights.reduce((result, flight) => {
    result[flight.airline] = flight.price;
    return result;
  }, {});
};

const fetchFlightPrices = async (source, destination, date) => {
  try {
    const result = await fetchData(source, destination, date);
    return result;
  } catch (error) {
    console.log(error);
  }
};

fetchFlightPrices('Delhi', 'Jaipur', '15 April 2023')
  .then((result) => console.log(result));
