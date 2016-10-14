import React from 'react';
import List from './List';
import AddListItem from './AddListItem';

const ShoppingList = ({
  listItems,
  addListItem,
  removeListItem,
  removeAllListItems
}) => (
  <div className="container">
    <div className="row">
      <div className="col-sm-6">

        <List 
          listItems={listItems} 
          removeListItem={removeListItem} 
          removeAllListItems={removeAllListItems}
        />

      </div>
      <div className="col-sm-6">

        <AddListItem addListItem={addListItem} />
      
      </div>
    </div>
  </div>
);

export default ShoppingList;
