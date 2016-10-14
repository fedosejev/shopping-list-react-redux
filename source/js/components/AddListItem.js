import React, { Component } from 'react';
import uuid from 'node-uuid';

const styleRequired = {
  color: '#ffaaaa'
};

class AddListItem extends Component {
  constructor() {
    super();

    this.state = {
      listItemName: '',
      listItemDescription: '',
      listItemQuantity: 0
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmitEvent = this.handleSubmitEvent.bind(this);
  }

  handleInputChange(event) {
    const inputName = event.target.name;
    const inputValue = event.target.value;

    this.setState(currentState => {
      return {
        ...currentState,
        [inputName]: inputValue
      };
    });
  }

  handleSubmitEvent(event) {
    event.preventDefault();

    const { addListItem } = this.props;
    const {
      listItemName,
      listItemDescription,
      listItemQuantity
    } = this.state;

    const listItem = {
      id: uuid.v4(),
      date: new Date(),
      name: listItemName.trim(),
      description: listItemDescription.trim(),
      quantity: parseInt(listItemQuantity, 10)
    };

    addListItem(listItem);
  }

  render() {
    const {
      listItemName,
      listItemDescription,
      listItemQuantity
    } = this.state;

    return (
      <form onSubmit={this.handleSubmitEvent}>
        <h3 className="page-header">Add New Item</h3>

        <div className="form-group">
          <label htmlFor="listItemName">Name <span style={styleRequired}>*</span></label>
          <input 
            type="text"
            className="form-control"
            id="listItemName"
            name="listItemName"
            placeholder="Enter name"
            required
            value={listItemName}
            onChange={this.handleInputChange} />
        </div>

        <div className="form-group">
          <label htmlFor="listItemDescription">Description</label>
          <textarea
            className="form-control"
            rows="3"
            id="listItemDescription"
            name="listItemDescription"
            placeholder="Enter description"
            ref="description"
            value={listItemDescription}
            onChange={this.handleInputChange}
          ></textarea>
        </div>

        <div className="form-group">
          <label htmlFor="listItemQuantity">Quantity <span style={styleRequired}>*</span></label>
          <div className="row">
            <div className="col-xs-5 col-sm-6 col-md-4">
              <input
                type="number"
                min="1"
                max="9999"
                step="1"
                className="form-control"
                id="listItemQuantity"
                name="listItemQuantity"
                required
                value={listItemQuantity}
                onChange={this.handleInputChange} />
            </div>
          </div>
        </div>

        <hr />

        <button type="submit" className="btn btn-primary">Add to list</button>
        <button type="reset" className="btn btn-link">Cancel</button>
      </form>
    );
  }
}

export default AddListItem;
