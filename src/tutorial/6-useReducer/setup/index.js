import React, { useState, useReducer } from "react";
import Modal from "./Modal";
import { data } from "../../../data";
import reducer from "./Reducer";
const Index = () => {
  const defaultState = {
    items: data,
    isModal: false,
    modalValue: "",
  };
  const [state, dispatch] = useReducer(reducer, defaultState);
  const [text, setText] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    const newItem = {
      name: text,
      id: new Date().getTime().toString(),
    };
    if (text) {
      dispatch({ type: "ADD_ITEMS", payload: newItem });
      setText('')
    } else {
      dispatch({ type: "NO_VALUE" });
    }
  };
  return (
    <>
      {state.isModal && <Modal value={state.modalValue} isModal={state.isModal} removeModal = {()=>{
        dispatch({type:'REMOVE_MODAL'})}}/>}
      <form>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button type="submit" onClick={handleSubmit}>
          Add
        </button>
      </form>
      {state.items.map((person) => {
        return <div key={person.id}>{person.name}</div>;
      })}
    </>
  );
};

export default Index;
