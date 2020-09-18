import React from 'react'
import WeatherIcons from 'react-weathericons'


import styles from './CurrentWeatherCard.module.css'
const CurrentWeatherCard = ({currentWeather, location}) =>{
    const icon = "wi-owm-"+ currentWeather.weather[0].id;
  return (
        <div className={styles.cardContainer}>

            {/* Row1 */}
            <div className={`${styles.row} ${styles.leftAligned}`}>
              <div className={styles.column}>
                <h4>{`${location.name},${location.country}`}</h4>
                <h6 className={styles.grey}>{new Date().toDateString()}</h6>
              </div>
            </div>

            {/* Row2 */}
           <div className={styles.row}>
            <h4 className={styles.rowHeader}>Today</h4>
           </div>

            <div className={styles.row}>
            <div className={`${styles.column} ${styles.fixed}`}>
              <h3> <WeatherIcons name="current" className={`${icon} ${styles.yellow}`} size="3x" /> </h3>
              <h6>{ currentWeather.weather[0].description } </h6>
            </div>

            <div className={`${styles.column} ${styles.fixed}`}>  
              <h3 className={styles.numberedText}>
                {currentWeather.main.temp} 
                <WeatherIcons name="celcuis" className={`wi-celsius ${styles.grey}`} /> 
              </h3>
              <h6 className={styles.numberedText}>
                Feels Like: {currentWeather.main.feels_like}
                <WeatherIcons name="celcuis" className={`wi-celsius ${styles.grey}`} /> 
              </h6>
           </div>
           </div>
             {/* Row3 */}
             <div className={styles.row}> 
              <div className={styles.column}>
                <div className={styles.square}><WeatherIcons name="cloud" className={`wi-cloud ${styles.blue}`}/> </div>
                <p className={`${styles.grey} ${styles.numberedText}`}>
                  {`Cloudiness: ${currentWeather.clouds.all}%`}
                 </p>
              </div>
              <div className={styles.column}>
              <div className={styles.square}> <WeatherIcons name="drop" className={`wi-raindrop ${styles.blue}`} /> </div>
                <p className={`${styles.grey} ${styles.numberedText}`}>
                  {`Precipitation: ${currentWeather.pop}%`}
                 </p>
              </div>
              <div className={styles.column}>
              <div className={styles.square}> <WeatherIcons name="drop" className={`wi-umbrella ${styles.blue}`} /> </div>
                <p className={`${styles.grey} ${styles.numberedText}`}>
                  {`Rain: ${currentWeather.rain ? currentWeather.rain['3h']: 0} mm`}
                 </p>
              </div>
             </div>
        </div>
  )
}

export default CurrentWeatherCard