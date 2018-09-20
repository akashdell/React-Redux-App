import React from "react";
import { connect } from "react-redux";
import { addTodo } from "../actions";

const AddTodo = ({ dispatch }) => {
  let x = 1;
  return (
    <div>
      <button
        type="submit"
        onClick={e => {
          e.preventDefault();
          dispatch(addTodo(x));
        }}
      >
        Add Todo
      </button>
      <p>{x}</p>
    </div>
  );
};

export default connect()(AddTodo);
