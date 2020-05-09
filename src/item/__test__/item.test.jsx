import React from 'react'
import Enzyme,{shallow, mount} from 'enzyme'     //本例子只以shallow(浅渲染，只渲染父组件)为例
import Item from '../../item'     //导入需测试的组件

test('Item',()=>{
    const item = shallow(<Item item="test"/>); //传入数据'item'

    expect(item.text()).toBe('test')
    expect(item.hasClass('item')).toBe(true)
    expect(item.hasClass('item-selected')).toBe(false)
})

test('Item Clicked',()=>{
    const item = shallow(<Item item="test" />)

    item.simulate('click')
    expect(item.hasClass('item')).toBe(true)
    expect(item.hasClass('item-selected')).toBe(true)
})