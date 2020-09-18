import axios from 'axios'
import *  as Constants from '../../constants'

export const addLocation= locationName =>(dispatch,getState)=>{
    dispatch({
        type:'FETCHING_DATA'
    })
    //fetch async data and then dispatch
    axios.get(`${Constants.WeatherUrlPrefix}?q=${locationName}&appid=${Constants.ApiKey}&units=metric`).then(
      (response)=>{
        dispatch({
            type:'ADD_LOCATION_DATA',
            data: response.data
        })
      }
    ).catch((err)=>{
      console.log(err)
      dispatch({
        type:'ERROR'
    })
    })

}