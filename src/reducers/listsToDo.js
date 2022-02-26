import { GET_TODO_LIST, GET_TODO_LIST_DETAIL, POST_TODO_LIST, PUT_TODO_LIST , GET_TODO_LIST_ITEM} from "../action/listToDoAction";
let initialState = {
  // list user all
  getListsToDo: false,
  errorListToDo: false,
  // list item all
  getListsToDoItem: false,
  errorListToDoItem: false,
  // list user detail
  isLoading: false,
  getListsToDoDetail: false,
  errorListToDoDetail: false,
  // list user post
  postListTodo: false,
  erorPostListTodo: false,
  title: "PokeDex",
};
const listsToDo = (state = initialState, action) => {
  switch (action.type) {
    case GET_TODO_LIST:
      return {
        ...state,
        getListsToDo: action.payload.data,
        isLoading: true,
        errorListToDo: action.payload.errorMessage,
      };
      
    case GET_TODO_LIST_ITEM:
      return {
        ...state,
        getListsToDoItem: action.payload.data,
        isLoading: true,
        errorListToDoItem: action.payload.errorMessage,
      };

      
    case GET_TODO_LIST_DETAIL:
      return {
        ...state,
        getListsToDoDetail: action.payload.data,
        errorListToDoDetail: action.payload.errorMessage,
      };

    case POST_TODO_LIST:
      return {
        ...state,
        postListTodo: action.payload.data,
        erorPostListTodo: action.payload.errorMessage,
      };
      
    case PUT_TODO_LIST:
      return {
        ...state,
        postListTodo: action.payload.data,
        erorPostListTodo: action.payload.errorMessage,
      };


    default:
      return state;
  }
};

export default listsToDo;
