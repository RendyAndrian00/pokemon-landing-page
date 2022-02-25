import axios from "axios";

export const GET_TODO_LIST = "GET_TODO_LIST";
export const GET_TODO_LIST_DETAIL = "GET_TODO_LIST_DETAIL";
export const POST_TODO_LIST = "POST_TODO_LIST";
export const PUT_TODO_LIST = "PUT_TODO_LIST";

export const getTodoList = () => {
  return (dispatch) => {
    axios
      .get("https://fakestoreapi.com/users")
      .then(function (response) {
        dispatch({
          type: GET_TODO_LIST,
          payload: {
            data: response.data,
            isLoaded: true,
            errorMessage: false,
          },
        });
      })
      .catch(function (error) {
        dispatch({
          type: GET_TODO_LIST,
          payload: {
            data: false,
            isLoaded: true,
            errorMessage: error.message,
          },
        });
      });
  };
};

export const getTodoListDetail = (id) => {
  return (dispatch) => {
    axios
      .get("https://fakestoreapi.com/users/" + id)
      .then(function (response) {
        dispatch({
          type: GET_TODO_LIST_DETAIL,
          payload: {
            data: response.data,
            errorMessage: false,
          },
        });
      })
      .catch(function (error) {
        dispatch({
          type: GET_TODO_LIST_DETAIL,
          payload: {
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};

export const postTodoList = (data) => {
  return (dispatch) => {
    axios
      .post("https://fakestoreapi.com/user", data)
      .then(function (response) {
        console.log(response);
        dispatch({
          type: POST_TODO_LIST,
          payload: {
            data: response.data,
            errorMessage: false,
          },
        });
      })
      .catch(function (error) {
        dispatch({
          type: POST_TODO_LIST,
          payload: {
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};

export const putTodoList = (data ,id) => {
  return (dispatch) => {
    axios
      .put("https://fakestoreapi.com/user/"+id, data)
      .then(function (response) {
        dispatch({
          type: PUT_TODO_LIST,
          payload: {
            data: response.data,
            errorMessage: false,
          },
        });
      })
      .catch(function (error) {
        dispatch({
          type: PUT_TODO_LIST,
          payload: {
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};

export const deleteTodoList = (id) => {
  return (dispatch) => {
    axios
      .delete("https://fakestoreapi.com/users/" + id)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
};

export const deleteTempTodoList = () => {
  return (dispatch) => {
    dispatch({
      type: GET_TODO_LIST_DETAIL,
      payload: {
        data: false,
        errorMessage: false,
      },
    });
  };
};
