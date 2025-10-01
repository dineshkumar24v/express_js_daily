const getWeatherData = (req, res) => {
  // console.log(req.query); // it returns an object from postman app = [Object: null prototype] { city: 'hyderabad', apikey: '123456' }

  const { city } = req.query;
  res.status(200).json({
    message: "data fetched",
    cityName: city,
    temperature: "32.0 celsius",
  });
};

const cities = (req, res) => {
  try {
    res.json(city_data);
  } catch (error) {
    res.status(500).send("no cities present");
  }
};

module.exports = { getWeatherData, cities };
