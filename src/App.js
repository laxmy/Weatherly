import React, { useState,Fragment } from 'react'
import './App.css';
import WeatherCardMain from './components/WeatherCardMain/WeatherCardMain';
import SearchBar from './components/SearchBar/Searchbar'
import { MoonLoader } from 'react-spinners'
import * as Constants from './constants'

const getFiveDaysTemps = list => {
  let weatherForecastArray = Object.keys(list).map(key => list[key]);
  return weatherForecastArray.filter((value, index) => index % 8 === 0).map(({ dt, dt_txt, main, clouds }) => ({ dt, dt_txt, main, clouds }));
}

function App() {

  const [input, setInput] = useState('')

  const [weatherData, setWeatherData]= useState({
    locationData:{},
    error: false,
    loading: false,
  })
   // Fetch weather information and update state
   const fetchWeatherData = (location) => {
    const URL = `${Constants.WeatherUrlPrefix}?q=${location}&appid=${Constants.ApiKey}&units=metric`
    setWeatherData({
      weatherDetails: {},
      loading: true,
      error: false
    })
      // Executed as callback function
      fetch(URL)
        .then(res => res.json())
        .then(data => {
          // If city exists, update weather details
          console.log(data)
          if(data.cod === '200') {
            setWeatherData({
              weatherDetails:{
                location: {
                  city: data.city.name,
                  country: data.city.country,
                },
                details: {
                  currentWeather: data.list[0],
                  sunrise: data.city.sunrise,
                  sunset: data.city.sunset,
                  utcOffset: data.city.timezone / 60,
                  pressure: data.list[0].main.pressure,
                  humidity: data.list[0].main.humidity,
                  wind: data.list[0].wind,
                  visibility: data.list[0].visibility / 1000,
                  clouds: data.list[0].clouds.all,
                },
                nextFiveReadings: data.list.slice(1, 5),
                fiveDayForecast: getFiveDaysTemps(data.list),
                lastUpdated: Date.now(),
              },
              loading: false,
              error: false
            })
          } else {
            // If city doesn't exist, throw error
            setWeatherData({
             ...weatherData,
              error: true
            })
          }
        })
        .catch(err => {
          console.log(err);
          setWeatherData({
            ...weatherData,
             error: true
           })
        })
  }

  React.useEffect(() => {
    let interval = null;
    interval = setInterval(() => {
      console.log("Auto-refresh")
      fetchWeatherData(weatherData.weatherDetails.location.name)
    }, 1000 * 60 * 60 * 2)
    return () => clearInterval(interval)
  })

  //Fetch new data 
  const handleSearch = e => {
    e.preventDefault()
    fetchWeatherData(input)
  }

  //default location that runs for first time
  React.useEffect(() => {
    fetchWeatherData('Vancouver')
  },[])

 console.log(weatherData)
  let cardContent = (weatherData.loading || !weatherData.weatherDetails===null) ? <MoonLoader /> : <WeatherCardMain weatherDetails={weatherData.weatherDetails} />
  if (weatherData.error && !weatherData.weatherDetails.location) {
    cardContent = (
      <Fragment>
        <h5> Error Occured </h5>
        <h6>An error occured! Please enter a valid city name to look up</h6>
      </Fragment>
      )
  }

  return (
    <div className="App">
      <header className="App-header">
        <h3 className="App-name">Weatherly</h3>
        <SearchBar
          value={input}
          onChangeHandler={e => setInput(e.target.value)}
          onClickHandler={handleSearch}
          submitEnabled={input !== ''}
          error={weatherData.error} />
      </header>
      <div className="centeredContent">
        {cardContent}
      </div>
    </div>
  );
}

export default App;
