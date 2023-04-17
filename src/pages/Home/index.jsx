import React, { useState } from "react";
import axios from "axios";
import moment from "moment";
import { FaSearch } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Button from "../../components/Button";
import InputField from "../../components/InputField";

import sunImage from "../../assets/sun.png";

import "./index.css";
import ListItem from "../../components/ListItem";

const Home = () => {
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState(null);
  const [searchHistory, setSearchHistory] = useState([]);

  const handleSearch = async (event) => {
    event.preventDefault();
    const API_KEY = "c3eaaa2e0e9e36ea721993cf04f18e3f";
    const API_URL = `https://api.openweathermap.org/data/2.5/weather?appid=${API_KEY}`;

    try {
      const response = await axios.get(`${API_URL}&q=${query}`);
      const data = response.data;

      const newSearch = {
        temp: `${Math.round(data.main.temp - 273.15)}°`,
        tempMax: `${Math.round(data.main.temp_max - 273.15)}°`,
        tempMin: `${Math.round(data.main.temp_min - 273.15)}°`,
        location: `${data.name}, ${data.sys.country}`,
        status: data.weather[0].main,
        humidity: `${data.main.humidity}%`,
        dateTime: moment().format("DD-MM-YYYY hh:mma"),
      };

      setWeather(newSearch);
      const updateSearchHistory = [...searchHistory, newSearch];
      setSearchHistory(updateSearchHistory);
      setQuery("");
    } catch (error) {
      toast.error("Not Found", { theme: "colored", hideProgressBar: true });
    }
  };

  const handleDelete = (index) => {
    const updatedSearchHistory = searchHistory.filter((item, i) => i !== index);
    setSearchHistory(updatedSearchHistory);
    toast.success("Deleted Successfully", {
      theme: "colored",
      hideProgressBar: true,
    });
  };

  const handleSearchHistory = (weatherHistory) => {
    setWeather(weatherHistory);
  };

  return (
    <div className="home">
      <ToastContainer />
      <form onSubmit={handleSearch}>
        <div className="search-container">
          <InputField
            labelName="Country"
            type="text"
            // placeholder="Enter country and city"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            style={{ marginRight: "10px" }}
          />
          <Button icon={<FaSearch />} className="search-button" type="submit" />
        </div>
      </form>

      {weather && (
        <div className="weather-container">
          <img
            className="weather-image"
            src={sunImage}
            alt="Weather Image"
          ></img>
          <div className="weather-info">
            <div>
              <p>Today's Weather</p>
              <p className="weather-temparature">{weather.temp}</p>
              <p>
                H: {weather.tempMax} L:
                {weather.tempMin}°
              </p>
              <p style={{ fontWeight: "bold" }}>{weather.location}</p>
            </div>
            <div className="weather-details">
              <p>{weather.status}</p>
              <p>Humidity: {weather.humidity}</p>
              <p>{weather.dateTime}</p>
            </div>
          </div>
          <div className="search-history-container">
            <p>Search History</p>
            {searchHistory && (
              <div>
                {searchHistory.map((history, index) => {
                  return (
                    <div key={index}>
                      <ListItem
                        name={history.location}
                        date={history.dateTime}
                        onSearch={() => handleSearchHistory(history)}
                        onDelete={() => handleDelete(index)}
                      />
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
export default Home;
