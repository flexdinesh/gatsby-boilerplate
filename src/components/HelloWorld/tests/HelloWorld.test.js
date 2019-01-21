import React from 'react'
import { shallow } from 'enzyme'
import HelloWorld from '../HelloWorld'

describe('<HelloWorld />', () => {
  it('should render', () => {
    const renderedComponent = shallow(<HelloWorld />)
    expect(renderedComponent.length).toEqual(1)
  })
})
