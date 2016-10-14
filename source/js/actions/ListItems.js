export const ADD_LIST_ITEM = 'ADD_LIST_ITEM';
export const REMOVE_LIST_ITEM = 'REMOVE_LIST_ITEM';
export const REMOVE_ALL_LIST_ITEMS = 'REMOVE_ALL_LIST_ITEMS';

export const addListItem = item => ({
  type: ADD_LIST_ITEM,
  item
});

export const removeListItem = itemId => ({
  type: REMOVE_LIST_ITEM,
  itemId
});

export const removeAllListItems = () => ({
  type: REMOVE_ALL_LIST_ITEMS
});
