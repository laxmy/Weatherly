import { configure , shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import React from 'react'

import WeatherCardMain from './WeatherCardMain'
import FiveDayForecastGrid from '../FiveDayForecastGrid/FiveDayForecastGrid'
import SparkLineGraph from '../SparkLineGraph'
import CurrentWeatherCard from '../CurrentWeatherCard/CurrentWeatherCard'

configure({adapter: new Adapter()})
describe('<weatherCardMain/>',()=>{
   
    it('should display components when data is available',()=>{
      let weather ={
                data:[{main:"some",min:2.5, max:10, wind:{ speed:100 }}],
                location:{name: 'somthing'},
                lastUpdated: new Date(),
                details:{wind:{speed: 100,}}
        }
        
        const wrapper = shallow(<WeatherCardMain/>)
        wrapper.setProps({weather})
        expect(wrapper.find(CurrentWeatherCard)).toHaveLength(1)
        expect(wrapper.find(SparkLineGraph)).toHaveLength(1)
        expect(wrapper.find(FiveDayForecastGrid)).toHaveLength(1)
    })
    it('should display Error when weather data is not available',()=>{
        let weather ={
            data:[],
            location:{name: 'somthing'},
            lastUpdated: new Date(),
            details:{wind:{speed: 100,}}
        }
        const wrapper = shallow(<WeatherCardMain/>)
        wrapper.setProps({weather})
        expect (wrapper.find('h5').first().text()).toContain('Error')
    }) 
})