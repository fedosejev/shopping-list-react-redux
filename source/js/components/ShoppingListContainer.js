import { connect } from 'react-redux';

import {
  addListItem,
  removeListItem,
  removeAllListItems
} from '../actions/ListItems';

import ShoppingList from './ShoppingList';

const mapStateToProps = ({ listItems }) => ({
  listItems
});

const mapDispatchToProps = dispatch => ({
  addListItem: listItem => (
    dispatch(addListItem(listItem))
  ),
  removeListItem: listItemId => (
    dispatch(removeListItem(listItemId))
  ),
  removeAllListItems: () => (
    dispatch(removeAllListItems())
  )
});

const ShoppingListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ShoppingList);

export default ShoppingListContainer;