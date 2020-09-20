import React from 'react'
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official'
import PropTypes from 'prop-types'

import * as Constants from '../constants'

const options = {
    chart: {
        type: 'spline',
    },
    title: {
        text: 'Next 12 hours'
    },
    yAxis: {
        gridLineWidth: 0,
        minorGridLineWidth: 0,
        offset: 5,
        title: {
            text: `Temperature (${Constants.DegreeCelcuis})`
        }
    },
    xAxis: {
        title: {
            text: ''
        },
        type: 'datetime',
        dateTimeLabelFormats: {
            minute: '%I:%M',
            hour: '%I:%M'
        }
    },
    legend: {
        enabled: false
    },
    plotOptions: {
        series: {
            color: '#333866',
        }
    },
    series: [{
        data: [],
    }],
    credits: {
        enabled: false
    },
    tooltip: {
        formatter: function () {
            // let time = moment(this.x).utcOffset(Highcharts.time.(this.x)).format('hh:mm A')
            return `${this.y} ${Constants.DegreeCelcuis}`
        }

    },
    time: {
        useUTC: false
    }

}
const SparkLineGraph = ({ nextFive, zone }) => {
    const data = nextFive.map(item => ([item.dt * 1000, item.main.temp]))
    options.series[0].data = data
    options.time.timezoneOffset = zone
    return (
        <HighchartsReact highcharts={Highcharts} options={options} />
    )
}

SparkLineGraph.propTypes = {
    nextFive: PropTypes.array,
    zone: PropTypes.number
}

export default SparkLineGraph