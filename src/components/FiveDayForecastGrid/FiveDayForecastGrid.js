import React from 'react'
import moment from 'moment'
import PropTypes from 'prop-types'
import * as Constants from '../../constants'
import styles from './Grid.module.css'

const getFormattedDate = (unixTimestamp,zoneOff) =>{
   return moment(unixTimestamp*1000).utcOffset(zoneOff).format('ddd MMM DD')
}

const FiveDayForecastGrid = ({fiveDayForecast,zone}) =>{
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
                <td>{`${eachDay.main.temp_min} ${Constants.DegreeCelcuis}`}</td>
                <td>{`${eachDay.main.temp_max} ${Constants.DegreeCelcuis}`}</td>
                <td>{`${eachDay.clouds.all} ${Constants.Percentage}`}</td>
            </tr>
        ))}
    </tbody>
  </table>
  )
}

FiveDayForecastGrid.propTypes={
  fiveDayForecast: PropTypes.array,
  zone: PropTypes.number
}

export default FiveDayForecastGrid