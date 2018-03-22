import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { addItem } from '../ducks/groceries';
import { selectItem } from '../ducks/groceries';
import { deselectItem } from '../ducks/groceries';
import { removeItem } from '../ducks/groceries';

import ListInputs from './ListInputs';
import ListSelection from './ListSelection';
import ListTable from './ListTable';

const mapStateToProps = ({
  groceries: {
    list: groceryList,
  },
}) => ({
  groceryList,
});

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    addItem, removeItem, selectItem, deselectItem
  }, dispatch)
);

class ListContainer extends Component {
  render() {
    return (
      <section className="groceryApp">
        <div className="listInputs">
          <ListInputs addItem={this.props.addItem} />
        </div>
        <div className="types">
          <ListSelection list={this.props.groceryList} />
          <ListTable
            list={this.props.groceryList}
            removeItem={this.props.removeItem}
            selectItem={this.props.selectItem}
            deselectItem={this.props.deselectItem}
          />
        </div>
      </section>
    );
  }
}

ListContainer.propTypes = {
  // Props
  // Actions
  addItem: PropTypes.func.isRequired,
  selectItem: PropTypes.func.isRequired,
  deselectItem: PropTypes.func.isRequired,
  removeItem: PropTypes.func.isRequired,
  // Store
  groceryList: PropTypes.array.isRequired,
  // Other
};

const ListContainerRedux = connect(mapStateToProps, mapDispatchToProps)(ListContainer);

export default ListContainerRedux;
