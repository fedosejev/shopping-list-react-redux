import React, { Component } from 'react';
import ListItemDescription from './ListItemDescription';

class ListItem extends Component {
  constructor() {
    super();
    
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();

    const { item, removeListItem } = this.props;
    const listItemId = item.id;

    removeListItem(listItemId);
  }

  render() {
    const { item } = this.props;

    return (
      <div className="panel panel-primary">
        <div className="panel-heading">
          {item.quantity} x {item.name}
        </div>

        {item.description.length > 0 ? <ListItemDescription description={item.description} /> : ''}

        <div className="panel-footer">
          <form className="form-inline" onSubmit={this.handleSubmit}>
            <button type="submit" className="btn btn-default btn-xs">Remove</button>
          </form>
        </div>
      </div>
    );
  }
}

module.exports = ListItem;
