import React from 'react';
import { shallow } from 'enzyme';
import {Header} from '../../components/Header';

test('should render Header correctly', () => {
  const wrapper = shallow(<Header startLogout={()=>{}} />);
  expect(wrapper).toMatchSnapshot();
});

// should call startLogout on btn click
test('should call startLogout on btn click', ()=>{
  const startLogout = jest.fn(); //return a spy
  const wrapper = shallow(<Header startLogout={startLogout}/>);
  wrapper.find('button').simulate('click');
  expect(startLogout).toHaveBeenCalled();
});

// LoginPage test file -> should call startLogin on btn click