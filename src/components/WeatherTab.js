import { useEffect, useState } from "react";
import { WEATHER_API_KEY, WEATHER_API_URL } from "../api";
import "../App.css";
import CurrentWeather from "./current-weather/current-weather";
import Forecast from "./forecast/forecast";
import Navbar from "./Navbar";
import Search from "./search/search";

function WeatherTab() {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [loading, setLoading] = useState(false);

  // Function to fetch weather based on lat and lon
  const fetchWeather = async (lat, lon) => {
    setLoading(true);
    const currentWeatherFetch = fetch(
      `${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
    );
    const forecastFetch = fetch(
      `${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
    );

    try {
      const [weatherResponse, forecastResponse] = await Promise.all([
        currentWeatherFetch,
        forecastFetch,
      ]);
      const weatherData = await weatherResponse.json();
      const forecastData = await forecastResponse.json();
      console.log(weatherData);

      setCurrentWeather({ city: weatherData.name, ...weatherData });
      setForecast({ city: forecastData.name, ...forecastData });
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  // Fetch weather for current location on component mount
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        console.log(latitude, longitude);
        fetchWeather(latitude, longitude);
      },
      () => {
        alert("Unable to retrieve your location");
      }
    );
  }, []);

  const handleOnSearchChange = (searchData) => {
    const [lat, lon] = searchData.value.split(" ");
    fetchWeather(lat, lon);
  };

  return (
    <div className="min-h-screen flex justify-center">
      <Navbar />
      <div className="mt-20 w-[30rem] bg-slate-100 rounded-lg p-2 h-max border border-black/10">
        <Search onSearchChange={handleOnSearchChange} className="" />
        {!currentWeather && !loading && (
          <h1 className="mt-2 text-center">NO DATA FOUND</h1>
        )}
        {loading && (
          <h1 className="mt-2 text-center">Fetching the weather...</h1>
        )}
        {currentWeather && <CurrentWeather data={currentWeather} />}
        {forecast && <Forecast data={forecast} />}
      </div>
    </div>
  );
}

export default WeatherTab;
