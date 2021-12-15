import * as renderer from 'react-test-renderer';
import React from 'react';
import Icon from '../icon';

describe('Icon', () => {
    it('是一个svg图标', () => {
        const json = renderer.create(<Icon name="alipay"/>).toJSON()
        expect(json).toMatchSnapshot()
    })
}) 