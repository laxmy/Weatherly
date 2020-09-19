import React,{Fragment} from 'react'
import WeatherIcons from 'react-weathericons'
import PropTypes from 'prop-types'

import styles from './CurrentWeatherCard.module.css'

const SquareIndicator = props =>{
    return (
        <Fragment>
             <div className={styles.square}> <WeatherIcons name="drop" className={`${props.iconName} ${styles.blue}`} /> </div>
              <p className={`${styles.grey} ${styles.numberedText}`}>
                {`${props.indicator}: ${props.value} ${props.unit}`}
             </p>
        </Fragment>
       
    )
}

SquareIndicator.propTypes={
    iconName: PropTypes.string,
    indicator: PropTypes.string,
    value: PropTypes.number,
    unit: PropTypes.string
}

export default SquareIndicator