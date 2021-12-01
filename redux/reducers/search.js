import { UPDATE_SEARCH } from "../actionTypes";
const initialState = {
  search: "",
};
const searchReducer = (state = initialState, action) => {
  //   debugger;
  switch (action.type) {
    case UPDATE_SEARCH:
      //   debugger;
      return {
        ...state,
        search: action.payload,
      };
    default:
      return state;
  }
};

export default searchReducer;
