import { configure , shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import React from 'react';

import SquareIndicator from './SquareIndicator'

configure({adapter: new Adapter()})
describe('<SquareIndicator/>',()=>{
   
    it('should display value is available',()=>{
        let props ={
            iconName:'something',
            indicator:'somthing',
            value:123,
            unit:'any'
        }
        const wrapper = shallow(<SquareIndicator/>)
        wrapper.setProps(props)
        expect (wrapper.find('p').first().text()).toContain(props.value)
    })
    it('should display NA  if value is not available',()=>{
        let props ={
            iconName:'something',
            indicator:'somthing',
            value: NaN,
            unit:'any'
        }
        const wrapper = shallow(<SquareIndicator/>)
        wrapper.setProps(props)
        expect (wrapper.find('p').first().text()).toContain('NA')
    })
})