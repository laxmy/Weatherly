import React from 'react'
import styles from './Grid.module.css'
import moment from 'moment'

const getFormattedDate = (unixTimestamp,zoneOff) =>{
   return moment(unixTimestamp*1000).utcOffset(zoneOff).format('ddd MMM DD')
}

const FiveDayForecastGrid = ({fiveDayForecast,zone}) =>{
    console.log(fiveDayForecast)
  return (
    <table id="dayForecast-Table" className={styles.table}>
    <thead>
      <tr colSpan="2">
        <th colSpan="2" className="table-Headercell">Next Five Days</th>
      </tr>
    </thead>
    <tbody>
        <tr>
            <td>Day</td>
            <td>Min</td>
            <td>Max</td>
            <td>Cloudiness</td>
        </tr>
        { fiveDayForecast && fiveDayForecast.map(eachDay => (
            <tr key={eachDay.dt}>
                <td>{getFormattedDate(eachDay.dt,zone)}</td>
                <td>{`${eachDay.main.temp_min} °C`}</td>
                <td>{`${eachDay.main.temp_max} °C`}</td>
                <td>{`${eachDay.clouds.all} %`}</td>
            </tr>
        ))}
    </tbody>
  </table>
  )
}

export default FiveDayForecastGrid