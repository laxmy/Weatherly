import React from 'react'
import WeatherIcons from 'react-weathericons'
import moment from 'moment'
import PropTypes from 'prop-types'

import SquareIndicator from './SquareIndicator'
import * as Constants from '../../constants'

import styles from './CurrentWeatherCard.module.css'

const CurrentWeatherCard = ({ currentWeather, location, lastUpdate }) => {

  const icon = "wi-owm-" + currentWeather.weather[0].id;
  return (
    <div className={styles.cardContainer}>

      {/* Row1 */}
      <div className={`${styles.row} ${styles.leftAligned}`}>
        <div className={styles.column}>
          <h4 className={`${styles.headerContent}`}>{`${location.name},${location.country}`}</h4>
          <h6 className={`${styles.grey} ${styles.numberedText} ${styles.fullWidth} ${styles.subHeader}`}>
            Updated {moment(lastUpdate).format('DD MMM YY h:mm:ss a')}
          </h6>
        </div>
      </div>

      {/* Row2 */}
      <div className={styles.row}>
        <h4 className={`${styles.headerContent} ${styles.rowHeader}`}>Today</h4>
      </div>

      {/* Row3 */}
      <div className={styles.row}>

        <div className={`${styles.column} ${styles.halfWidth} ${styles.highLight}`}>
          <WeatherIcons name="current" className={`${icon} ${styles.yellow}`} size="3x" />
          <h6 className={`${styles.headerContent}`}>{currentWeather.weather[0].description} </h6>
        </div>

        <div className={`${styles.column} ${styles.halfWidth} ${styles.highLight}`}>
          <h3 className={`${styles.fullWidth} ${styles.numberedText}`}>
            {currentWeather.main.temp}
            <WeatherIcons name="celcuis" className={`wi-celsius ${styles.grey}`} />
          </h3>
          <h6 className={`${styles.numberedText} ${styles.headerContent}`}>
            Feels Like: {currentWeather.main.feels_like}
            <WeatherIcons name="celcuis" className={`wi-celsius ${styles.grey}`} />
          </h6>
        </div>
      </div>

      {/* Row 4 */}
      <div className={styles.row}>
        <div className={styles.column}>
          <SquareIndicator indicator={'Cloudiness'} value={currentWeather.clouds.all} unit={Constants.Percentage} iconName={'wi-cloud'} />
        </div>
        <div className={styles.column}>
          <SquareIndicator indicator={'Precipitation'} value={currentWeather.pop} unit={Constants.Percentage} iconName={'wi-raindrop'} />
        </div>
        <div className={styles.column}>
          <SquareIndicator indicator={'Rain'} value={currentWeather.rain ? currentWeather.rain['3h'] : 0} unit={'mm'} iconName={'wi-umbrella'} />
        </div>
      </div>
    </div>
  )
}

CurrentWeatherCard.propTypes = {
  currentWeather: PropTypes.object,
  location: PropTypes.object,
  lastUpdate: PropTypes.instanceOf(Date),
}

export default CurrentWeatherCard