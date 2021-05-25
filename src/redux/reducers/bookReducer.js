import allBooks from "../../fakeData/books.json";
const initialState = {
  discoverList: allBooks,
  readingList: [],
  finishedList: [],
};

const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_READING_LIST": {
      const newState = {
        ...state,
        readingList: [...state.readingList, action.payload],
      };
      return newState;
    }
    case "REMOVE_FROM_READING_LIST": {
      const newState = {
        ...state,
        readingList: state.readingList.filter(b=>b.id!==action.payload.id)
      };
      return newState;
    }
    case "REMOVE_FROM_READING_LIST_ADD_TO_FINISHED_LIST": {
      const newState = {
        ...state,
        readingList: state.readingList.filter(b=>b.id!==action.payload.id),
        finishedList: state.finishedList.indexOf(action.payload) < 0
        ? [...state.finishedList, action.payload]
        : [...state.finishedList],
      };
      return newState;
    }
    default: {
      return state;
    }
  }
};


export default bookReducer;