const initialState = {
  num: 0
};

const todos = (state = initialState, action) => {
  console.log("action", action);
  switch (action.type) {
    case "ADD_TODO":
      return { ...state, num: action.num + 1 };
    case "SUBTRACT_TODO":
      return { ...state, num: action.num - 1 };

    default:
      return state;
  }
};

export default todos;
