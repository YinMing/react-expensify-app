import React from 'react';
import {shallow} from 'enzyme';
import { LoginPage} from '../../components/LoginPage';

test('should correctly render LoginPage', ()=>{
    const wrapper = shallow(<LoginPage />);
    expect(wrapper).toMatchSnapshot();
});

test('should call startLogin on btn click', ()=>{
  const startLogin = jest.fn(); //return a spy
  const wrapper = shallow(<LoginPage startLogin={startLogin}/>);
  wrapper.find('button').simulate('click');
  expect(startLogin).toHaveBeenCalled();
});
