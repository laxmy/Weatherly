import React from 'react'
import styles from './InfoCard.module.css'
const InfoCard = ({item, children}) =>{ 
    return (
        <div className={styles.card}>
          <h6 className={styles.cardTitle}>{item.name}</h6>
          <div className={styles.content}>
            {children}
          </div>
        </div>
    )
}


export default  InfoCard 


