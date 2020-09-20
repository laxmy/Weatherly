import React from 'react'
import PropTypes from 'prop-types'

import styles from './InfoCard.module.css'
//Generic wrapper component that uses children prop to render content
const InfoCard = ({ title, children }) => {
  return (
    <div className={styles.card}>
      <h6 className={styles.cardTitle}>{title}</h6>
      <div className={styles.content}>
        {children}
      </div>
    </div>
  )
}

InfoCard.propTypes = {
  item: PropTypes.object,
  children: PropTypes.node,
}


export default InfoCard


