import React ,{ useEffect, useState } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {addLocation} from'./store/actions'
import './App.css';
import WeatherCardMain from './components/WeatherCardMain/WeatherCardMain';
import SearchBar from './components/SearchBar/Searchbar'

function App() {

  const [input, setInput] = useState('')

  const dispatch = useDispatch()

  //Fetch new data 
  const handleSearch = e => {
    e.preventDefault()
    dispatch(addLocation(input))
  }

  //default location that runs for first time
  useEffect(()=>{
    dispatch(addLocation('Vancouver'))

  },[dispatch])

  const{ locationData, error,loading} = useSelector(state => state.locations)

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
        {locationData.data && <WeatherCardMain weather={locationData}/>}
      </div>
  );
}

export default App;
