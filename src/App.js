import React ,{ useEffect, useState } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {addLocation} from'./store/actions'
import './App.css';
import WeatherCardMain from './components/WeatherCardMain/WeatherCardMain';
import SearchBar from './components/SearchBar/Searchbar'
import { MoonLoader}  from 'react-spinners'

function App() {

  const [input, setInput] = useState('')

  const dispatch = useDispatch()

  const{ locationData, error,loading} = useSelector(state => state.locations)

  useEffect(() => {
    let interval = null;
    interval = setInterval(() => {
      console.log("Auto-refresh")
      dispatch(addLocation(locationData.location.name))
    }, 1000 * 60 * 60 *2)
    return () => clearInterval(interval)
  })

  //Fetch new data 
  const handleSearch = e => {
    e.preventDefault()
    dispatch(addLocation(input))
  }

  //default location that runs for first time
  useEffect(()=>{
    dispatch(addLocation('Vancouver'))
  },[dispatch])

  
  let cardContent = (loading || !locationData.data) ? <MoonLoader/>:  <WeatherCardMain weather={locationData}/>
  return (
      <div className="App">
        <header className="App-header">
          <h3 className="App-name">Weatherly</h3>
          <SearchBar
            value ={input}
            onChangeHandler={e => setInput(e.target.value)}
            onClickHandler={handleSearch}
            submitEnabled={input !==''}
            error ={error} />
        </header>
        <div class ="centeredContent">
          {cardContent}
        </div>
       
       
      </div>
  );
}

export default App;
