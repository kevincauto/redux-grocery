import React from 'react';
import PropTypes from 'prop-types';

const ListSelection = ({ list }) => {
  return (
    <div className="listSelection">
      <table>
        <tbody>
          <tr><th>Selected List</th></tr>
          {list
            .filter(item => item.selected)
            .map((item, i) => <tr key={i}><td>{item.name}</td></tr>)
          }
        </tbody>
      </table>
    </div>
  );
}

ListSelection.propTypes = {
  list: PropTypes.array.isRequired
};

export default ListSelection;
