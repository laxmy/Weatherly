import React, { Fragment } from 'react'
import moment from 'moment-timezone'
import PropTypes from 'prop-types'

import { CurrentWeatherDetails } from '../../constants'
import FiveDayForecastGrid from '../FiveDayForecastGrid/FiveDayForecastGrid'
import InfoCard from '../InfoCard/InfoCard'
import SparkLineGraph from '../SparkLineGraph'
import CurrentWeatherCard from '../CurrentWeatherCard/CurrentWeatherCard'
import WeatherIcons from 'react-weathericons'
import * as Constants from '../../constants'

import styles from './WeatherCardMain.module.css'

const generateInfoCardContent = (data, itemName) => {
    const itemToRender = CurrentWeatherDetails.filter(item => item.name == itemName)[0]

    switch (itemName) {
        case 'Pressure': {
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
                    <p className={styles.cardContentMain}>{moment(data.sunrise * 1000).utcOffset(data.utcOffset / 60).format(' hh:mm A')} </p>
                <WeatherIcons name={itemToRender.iconName[0]} className={`${itemToRender.iconName[1]} ${styles.cardIcon}`} />
                    <p className={styles.cardContentMain}>{moment(data.sunset * 1000).utcOffset(data.utcOffset / 60).format(' hh:mm A')}</p>
            </Fragment>
            )
        case 'Humidity': {
            return (
                <Fragment>
                    <WeatherIcons name={itemToRender.iconName[0]} className={`${itemToRender.iconName[0]} ${styles.cardIcon}`} />
                    <p className={styles.cardContentMain}>{`${data.humidity} ${Constants.Percentage}`}</p>
                </Fragment>
            )
        }
        case 'Visibility': {
            return (
                <Fragment>
                    <p className={styles.cardContentMain}>{data.visibility / 1000} km</p>
                </Fragment>
            )
        }
        case 'Wind': {
            return (
                <Fragment>
                    <WeatherIcons name={itemToRender.iconName[0]} className={`${itemToRender.iconName[0]} ${styles.cardIcon}`} />
                    <p className={styles.cardContentMain}>{data.wind.speed} mps</p>
                </Fragment>
            )
        }
        case 'Clouds': {
            return (
                <Fragment>
                    <WeatherIcons name={itemToRender.iconName[0]} className={`${itemToRender.iconName[0]} ${styles.cardIcon}`} />
                    <p className={styles.cardContentMain}>{`${data.clouds} ${Constants.Percentage}`}</p>
                </Fragment>
            )
        }
    }
}

const WeatherCardMain = ({ weatherDetails}) => {

    if (!weatherDetails ||!weatherDetails.details)  
    return (
        <div className={styles.centeredContainer}>
            <h5> Error Occured </h5>
            <h6>An error occured! Data is not available. Please try after sometime</h6>
        </div>
    )

    return (
        <div className={styles.container}>
            <div className={styles.centeredContainer}>
                <CurrentWeatherCard currentWeather={weatherDetails.details.currentWeather} location={weatherDetails.location} lastUpdate={weatherDetails.lastUpdated} />
            </div>
            <div className={styles.cardContainer}>
                {CurrentWeatherDetails.map((item, index) =>
                    <InfoCard title={item.name} key={index}>
                        {generateInfoCardContent(weatherDetails.details, item.name)}
                    </InfoCard>)}
            </div>

            <div className={styles.centeredContainer}>
                <SparkLineGraph nextFive={weatherDetails.nextFiveReadings} zone={weatherDetails.details.utcOffset} />
            </div>

            <FiveDayForecastGrid fiveDayForecast={weatherDetails.fiveDayForecast} zone={weatherDetails.details.utcOffset} />

        </div>
    )

}

WeatherCardMain.propTypes = {
    weatherDetails: PropTypes.object,
}

export default WeatherCardMain