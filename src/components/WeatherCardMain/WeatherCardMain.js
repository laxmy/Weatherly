import React,{Fragment} from 'react'
import moment from 'moment-timezone'

import { CurrentWeatherDetails } from '../../constants'
import FiveDayForecastGrid from '../FiveDayForecastGrid/FiveDayForecastGrid'
import InfoCard from '../InfoCard/InfoCard'
import SparkLineGraph from '../SparkLineGraph'
import CurrentWeatherCard from '../CurrentWeatherCard/CurrentWeatherCard'
import WeatherIcons from 'react-weathericons'

import styles from './WeatherCardMain.module.css'

const generateInfoCardContent = (data, itemName)=>{
    const itemToRender = CurrentWeatherDetails.filter(item => item.name==itemName)[0]

    switch(itemName){
        case 'Pressure':{
            return (
            <Fragment>
                <WeatherIcons name={itemToRender.iconName[0]} className={`${itemToRender.iconName[0]} ${styles.cardIcon}`} /> 
                <p className={styles.cardContentMain}>{data.pressure} hPa</p>
            </Fragment>
            )
        }
        case 'SunRise And SunSet':
            return (
                <Fragment>
                    <WeatherIcons name={itemToRender.iconName[0]} className={`${itemToRender.iconName[0]} ${styles.cardIcon}`} /> 
                    <p className={styles.cardContentMain}>{moment(data.sunrise*1000).utcOffset(data.utcOffset/60).format(' hh:mm A')} </p>
                    <WeatherIcons name={itemToRender.iconName[0]} className={`${itemToRender.iconName[1]} ${styles.cardIcon}`} /> 
                    <p className={styles.cardContentMain}>{moment(data.sunset*1000).utcOffset(data.utcOffset/60).format(' hh:mm A')}</p>
             </Fragment>
                )
        case 'Humidity':{
            return (
                <Fragment>
                    <WeatherIcons name={itemToRender.iconName[0]} className={`${itemToRender.iconName[0]} ${styles.cardIcon}`} /> 
                    <p className={styles.cardContentMain}>{data.humidity} %</p>
                </Fragment>
            )
        }
        case 'Visibility':{
            return (
                <Fragment> 
                    <p className={styles.cardContentMain}>{data.visibility/1000} km</p>
                </Fragment>
            )
        }
        case 'Wind':{
            return(
                <Fragment>
                    <WeatherIcons name={itemToRender.iconName[0]} className={`${itemToRender.iconName[0]} ${styles.cardIcon}`} /> 
                    <p className={styles.cardContentMain}>{data.wind.speed} mps</p>
                </Fragment>
            )
        }
        case 'Clouds':{
            return(
                <Fragment>
                    <WeatherIcons name={itemToRender.iconName[0]} className={`${itemToRender.iconName[0]} ${styles.cardIcon}`} /> 
                    <p className={styles.cardContentMain}>{data.clouds} %</p>
                </Fragment>
            )
        }
    }
}

const WeatherCardMain =({weather})=>{
  
    const currentWeather = weather.data[0]
    return(
        <div className={styles.container}>
            <div className={styles.centeredContainer}>
                <CurrentWeatherCard currentWeather={currentWeather} location={weather.location} lastUpdate={weather.lastUpdated}/>
            </div>
            <div className  ={styles.cardContainer}>
                { CurrentWeatherDetails.map((item,index) => 
                    <InfoCard item={item} key={index} data={weather.details}>
                        {generateInfoCardContent(weather.details,item.name)}
                    </InfoCard>)} 
            </div>
           
            <div className  ={styles.centeredContainer}>
                <SparkLineGraph nextFive={weather.nextFiveReadings} zone={weather.details.utcOffset}/>
            </div>

            <FiveDayForecastGrid fiveDayForecast={weather.fiveDayForecast} zone={weather.details.utcOffset} />

        </div>
    )

}


export default WeatherCardMain