import update from 'immutability-helper';

const duckRoot = 'app/groceries/';

// Constants
export const ADD_ITEM = `${duckRoot}ADD_ITEM`;
export const REMOVE_ITEM = `${duckRoot}REMOVE_ITEM`;
export const SELECT_ITEM = `${duckRoot}SELECT_ITEM`;
export const DESELECT_ITEM = `${duckRoot}DESELECT_ITEM`;

export const initialState = {
  list: [
    {
      id: 66,
      name: 'Bananas',
      category: 'Fruit',
      deliveryMethod: 'Air',
      selected: false
    },
    {
      id: 16,
      name: 'Whole Grain Bread',
      category: 'Grains',
      deliveryMethod: 'Air',
      selected: false
    },
    {
      id: 100,
      name: 'Lettuce',
      category: 'Vegetable',
      deliveryMethod: 'Ground',
      selected: false
    },
    {
      id: 10,
      name: 'Roasted Turkey',
      category: 'Deli',
      deliveryMethod: 'Ground',
      selected: false
    },
  ]
};

// Reducers
export default function reducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case ADD_ITEM:
      return update(state, {
        list: { $push: [payload] },
      });

    case REMOVE_ITEM:
      let afterRemove = state.list.filter(obj => obj !== payload);
      return { list: afterRemove }

    case SELECT_ITEM:
      let afterSelect = state.list.map(obj => {
        if (obj === payload) {
          obj.selected = true;
        }
        return obj;
      });
      return { list: afterSelect }

    case DESELECT_ITEM:
      let afterDeselect = state.list.map(obj => {
        if (obj === payload) {
          obj.selected = false;
        }
        return obj;
      });
      return { list: afterDeselect }

    default:
      return state;
  }
};

// Action Creators
export const addItem = item => {
  return ({
    type: ADD_ITEM,
    payload: item,
  });
}

export const removeItem = item => {
  return ({
    type: REMOVE_ITEM,
    payload: item,
  });
}

export const selectItem = item => {
  return ({
    type: SELECT_ITEM,
    payload: item,
  });
}

export const deselectItem = item => {
  return ({
    type: DESELECT_ITEM,
    payload: item,
  });
}
