import React from "react";

const reducer = (state, action) => {
  if (action.type === "ADD_ITEMS") {
    return { ...state, items: [...state.items, action.payload],  modalValue: "Item added", isModal:true  };
  }
  if (action.type === "NO_VALUE") {
    return { ...state, isModal: true, modalValue: "Enter an item" };
  }
  if (action.type === "REMOVE_MODAL") {
    return { ...state, isModal: false, modalValue: ""};
  }
};

export default reducer;
