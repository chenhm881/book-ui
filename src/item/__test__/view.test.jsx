import React from 'react';
import Enzyme, { render, shallow, mount } from 'enzyme';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import connectDefaultPage, {DefaultPage} from '../../views/default';
import queryAction from '../../views/queryAction';
import Item from '../../item'; 

describe('TestView', () => {
  const action = '../../views/queryAction';
  const initialState = {
    isLoading: true,
    queryResult: {},
  };
  jest.mock('../../views/queryAction');
  
  const thunk = ({ dispatch, getState }) => next => action => {
    if (typeof action === 'function') {
        return action(dispatch, getState)
    }
    return next(action)
  }

  let store;

  let container;

  const create = () => {
    const mockStore = {
        getState: jest.fn(() => (initialState)),
        dispatch: jest.fn(),
        subscribe: jest.fn(),
    }
    const next = jest.fn()
    const invoke = action => thunk(mockStore)(next)(action)
    return { mockStore, next, invoke }
   }

  beforeEach(() => {
    //store = mockStore(initialState);
    //const { mockStore } = create();
    //container = mount (<Provider store={mockStore}><DefaultPage/></Provider>);
    // container = mount(
    //     <Provider store={store}>
    //  		<DefaultPage />
    //  	</Provider>
    // ); 
    
    const { next, invoke } = create()
    const action = { type: 'QUERY_LIST' }
    invoke(action)
    expect(next).toHaveBeenCalledWith(action)
 
    const fn = jest.fn()
    invoke(fn)
    expect(fn).toHaveBeenCalled()
    
  });

  test('Item',()=>{
        const item = shallow(<Item item="test"/>); //传入数据'item'  
        expect(item.text()).toBe('test')
   });

   test('passes dispatch and getState', () => {
    const { mockStore, invoke } = create()
    invoke((dispatch, getState) => {
      dispatch('QUERY_LIST')
      getState()
    })
    expect(mockStore.dispatch).toHaveBeenCalledWith('QUERY_LIST')
    expect(mockStore.getState).toHaveBeenCalled()
  })

})