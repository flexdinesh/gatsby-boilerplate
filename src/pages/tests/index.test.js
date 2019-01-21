import React from 'react'
import { shallow } from 'enzyme'
import Index from '../index'

describe('<Index />', () => {
  it('should render', () => {
    const renderedComponent = shallow(<Index />)
    expect(renderedComponent.length).toEqual(1)
  })
})
