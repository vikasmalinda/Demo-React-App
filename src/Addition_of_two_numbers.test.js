//const React = require('react');
import React from 'react';
import Adapter from 'enzyme-adapter-react-16'
import {shallow, configure, mount} from 'enzyme'
import Addition_of_two_numbers from './component/Addition_of_two_numbers';
import './setupTests'
//import Button_ from './component/Button_'

configure({
    adapter : new Adapter()
});

describe('Testing add component' , function(){

    it('Testing whether the component is mount or not' , function(){
        try {
            const wrapper = shallow(<Addition_of_two_numbers/>)
        } catch (error) {
            fail()
        }
    })

    it('Testing whether the object is created or not' , function(){
        try {
            const wrapper = shallow(<Addition_of_two_numbers/>)
            let obj = wrapper.instance()
        } catch (error) {
            fail()
        }
    })

    it('Testing whether the input is created or not' , function(){
        try {
            const wrapper = shallow(<Addition_of_two_numbers/>)
            //let obj = wrapper.instance()
            let len = wrapper.find('input').length
            expect(len).toBe(4);
        } catch (error) {
            fail()
        }
    })

    // it('Testing msg' , function(){
    //     try {
    //         const wrapper = shallow(<Addition_of_two_numbers/>)
    //         let msg = wrapper.find('placeholder').at(0).text();
    //         expect(msg).toEqual('First Number');
    //     } catch (error) {
    //         fail()
    //     }
    // })

    it('Testing the inital state values' , function(){
        try {
            const wrapper = shallow(<Addition_of_two_numbers/>)
            let obj = wrapper.instance();
            let num1 = obj.state.num1;
            expect(num1).toBe(0);
        } catch (error) {
            fail()
        }
    })

    it('setting a values' , function(){
        try {
            const wrapper = shallow(<Addition_of_two_numbers/>)
            let obj = wrapper.instance();
            obj.setState({num1 : 10});

            let num1 = obj.state.num1;
            expect(num1).toBe(10);
        } catch (error) {
            fail()
        }
    })

    it('Testing Addition' , function(){
        try {
            const wrapper = shallow(<Addition_of_two_numbers/>)
            let obj = wrapper.instance();
            obj.setState({num1 : 10, num2 : 20});

            wrapper.find('input').at(2).simulate('click');

            let res = obj.state.num3;
            expect(res).toBe(30);

        } catch (error) {
            fail()
        }
    })

    it('Testing form the component object' , function(){
        try {
            const wrapper = shallow(<Addition_of_two_numbers/>)
            let obj = wrapper.instance();
            obj.setState({num1 : 10, num2 : 20});

            obj.add()
            let res = obj.state.num3;
            expect(res).toBe(30);

        } catch (error) {
            fail()
        }
    })

    // it('Testing whether the component is mount or not Button' , function(){
    //     try {
    //         const wrapper1 = shallow(<Addition_of_two_numbers/>)
    //         let obj = wrapper1.instance();
    //         let obj1 = {
    //             name: 'Addition' ,
    //             onClick: obj.clickHandle
    //         }
    //         const wrapper = shallow(<Button_ name={obj1.name} onClick={obj1.onClick}/>)
    //         let object = wrapper.instance();
    //         console.log('After wrapper')
    //         // let name = wrapper.find('input').at(0).name.text();
    //         let name = object.props.name;
    //         console.log('Name ' + name)
    //         expect(name).toEqual('Addition')
    //     } catch (error) {
    //         console.log(error)
    //         fail()
    //     }
    // })


})
