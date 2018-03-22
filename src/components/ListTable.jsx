import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ListTable extends Component {
  selectFood(listItem) {
    this.props.selectItem(listItem)
  }
  deselectFood(listItem) {
    this.props.deselectItem(listItem)
  }
  removeFood(listItem) {
    this.props.removeItem(listItem)
  }

  render() {
    const { list } = this.props;
    return (
      <div className="listTable">
        <table>
          <tbody>
            <tr>
              <th>Grocery</th>
              <th>Select</th>
              <th>Deselect</th>
              <th>Remove</th>
            </tr>
            {list.map((listItem, i) => {
              return <tr key={i}>
                <td>{listItem.name}</td>
                <td><button onClick={() => this.selectFood(listItem)}>Select</button></td>
                <td><button onClick={() => this.deselectFood(listItem)}>Deselect</button></td>
                <td><button onClick={() => this.removeFood(listItem)}>Remove</button></td>
              </tr>
            })}
          </tbody>
        </table>
      </div>
    )
  }
}

ListTable.propTypes = {
  selectItem: PropTypes.func.isRequired,
  deselectItem: PropTypes.func.isRequired,
  removeItem: PropTypes.func.isRequired,
};

export default ListTable
