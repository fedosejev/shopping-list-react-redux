import { createStore } from 'redux';
import listItems from './reducers';

const store = createStore(listItems);

import { addListItem, removeListItem, removeAllListItems } from './actions/ListItems';

// Log the initial state
console.log(store.getState());

// Every time the state changes, log it
// Note that subscribe() returns a function for unregistering the listener
let unsubscribe = store.subscribe(() =>
  console.log(store.getState())
);

// Dispatch some actions
store.dispatch(addListItem({
  id: 1,
  name: 'One',
  description: 'The first one.',
  quantity: 99
}));

store.dispatch(addListItem({
  id: 2,
  name: 'Second',
  description: 'The second one.',
  quantity: 999
}));

store.dispatch(addListItem({
  id: 3,
  name: 'Third',
  description: 'The third one.',
  quantity: 9999
}));

store.dispatch(removeListItem(2));
store.dispatch(removeAllListItems());

// Stop listening to state updates
unsubscribe();