import React, { Fragment } from 'react'
import WeatherIcons from 'react-weathericons'
import PropTypes from 'prop-types'

import styles from './CurrentWeatherCard.module.css'

const SquareIndicator = ({iconName, indicator,value, unit}) => {
    let val = isNaN(value) ? 'NA': value
    return (
        <Fragment>
            <div className={styles.square}> <WeatherIcons name="drop" className={`${iconName} ${styles.blue}`} /> </div>
            <p className={`${styles.grey} ${styles.numberedText}`}>
                {`${indicator}: ${val} ${unit}`}
            </p>
        </Fragment>
    )
}

SquareIndicator.propTypes = {
    iconName: PropTypes.string,
    indicator: PropTypes.string,
    value: PropTypes.number,
    unit: PropTypes.string
}

export default SquareIndicator