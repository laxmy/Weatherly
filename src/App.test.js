// import { configure , shallow} from 'enzyme'
// import Adapter from 'enzyme-adapter-react-16'
// import React from 'react'
// import { MoonLoader } from 'react-spinners'
// import App from './App'

// configure({adapter: new Adapter()})

// const mockUseEffect = () => {
//   useEffect.mockImplementationOnce(f => f());
// };


// describe('<App/>',()=>{
//    let wrapper = null

//    beforeEach(()=>{
//      /* mocking useEffect */
//     useEffect = jest.spyOn(React, "useEffect");
//     mockUseEffect(); // 2 times
//     mockUseEffect(); //
//     /* mocking useSelector on our mock store */
//     jest
//        .spyOn(ReactReduxHooks, "useSelector")
//        .mockImplementation(state => store.getState());
//   /* mocking useDispatch on our mock store  */
//   jest
//      .spyOn(ReactReduxHooks, "useDispatch")
//      .mockImplementation(() => store.dispatch);

//     const wrapper = shallow(<App/>)
//    })

//     it('should display components when data is available',()=>{
//       let props ={ 
//         locationData:{}, 
//         error: false, 
//         loading : true
//       }
//         wrapper.setProps({...props})
//         expect(wrapper.find(MoonLoader)).toHaveLength(1)
//     })
//     it('should display Error when weather data is not available',()=>{
//         let weather ={
//             data:[],
//             location:{name: 'somthing'},
//             lastUpdated: new Date(),
//             details:{wind:{speed: 100,}}
//         }
//         const wrapper = shallow(<WeatherCardMain/>)
//         wrapper.setProps({weather})
//         expect (wrapper.find('h5').first().text()).toContain('Error')
//     }) 
// })