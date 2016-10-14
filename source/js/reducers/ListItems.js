import {
  ADD_LIST_ITEM,
  REMOVE_LIST_ITEM,
  REMOVE_ALL_LIST_ITEMS
} from '../actions/ListItems';

const initialState = {
  listItems: {}
};

const removeItemFromList = (listItems, itemId) => {
  const listItemsCopy = { ...listItems };

  delete listItemsCopy[itemId];

  return listItemsCopy;
};

const listItems = (state = initialState, action) => {
  switch (action.type) {

    case ADD_LIST_ITEM:
      return {
        listItems: {
          ...state.listItems,
          [action.item.id]: action.item
        }
      };

    case REMOVE_LIST_ITEM:
      return {
        listItems: removeItemFromList(state.listItems, action.itemId)
      };

    case REMOVE_ALL_LIST_ITEMS:
      return {
        listItems: {}
      };

    default:
      return state;
  }
};

export default listItems;