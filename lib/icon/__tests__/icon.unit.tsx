import * as renderer from 'react-test-renderer';
import React from 'react';
import Icon from '../icon';
import {mount} from 'enzyme';

describe('Icon', () => {
    it('是一个svg图标', () => {
        const json = renderer.create(<Icon name="alipay"/>).toJSON()
        expect(json).toMatchSnapshot()
    })
    it('点击icon', ()=>{
        const fn = jest.fn()
        const component = mount(<Icon name="alipay" onClick={fn}/>)
        component.find('svg').simulate('click')   // 找到svg元素并模拟点击事件
        expect(fn).toBeCalled()
    })
}) 