import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, compose } from 'redux';
import listItems from './reducers/ListItems';
import ShoppingListContainer from './components/ShoppingListContainer';

const store = createStore(listItems, compose(window.devToolsExtension ? window.devToolsExtension() : f => f));

render(
  <Provider store={store}>
    <ShoppingListContainer />
  </Provider>,
  document.querySelector('[data-react-application]')
);