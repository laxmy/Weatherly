const getFiveDaysTemps = list => {
  let weatherForecastArray = Object.keys(list).map(key => list[key]);
  return weatherForecastArray.filter((value,index) => index % 8=== 0).map(({dt, dt_txt,main,clouds}) => ({dt, dt_txt,main,clouds}));
}

const locations = (state = {locationData:{}, error: false, loading: false}, action) => {
    switch (action.type) {
      case 'ADD_LOCATION_DATA':
        {
          //Replacing the location with a brand new object as we deal with only one location at a time
          let locData = {
            location: action.data.city,
            data: action.data.list,
            details: {
              sunrise: action.data.city.sunrise,
              sunset: action.data.city.sunset,
              utcOffset: action.data.city.timezone/60,
              pressure: action.data.list[0].main.pressure,
              humidity: action.data.list[0].main.humidity,
              wind: action.data.list[0].wind,
              visibility: action.data.list[0].visibility/1000,
              clouds: action.data.list[0].clouds.all,
            },
            nextFiveReadings: action.data.list.slice(1,5),
            fiveDayForecast: getFiveDaysTemps(action.data.list)
          }
        return ({locationData:locData, error: false, loading: false})
        }
        case 'FETCHING_DATA':
          return {...state,loading:true}
        case 'ERROR':
          return {...state,error:true, loading: false}
        default:
          return state
    }
  }


  export default locations