import axios from 'axios';
import { Dispatch } from 'redux';

const url = 'https://jsonplaceholder.typicode.com/todos';

export const fetchTodos = () => {
  return async (dispatch: Dispatch) => {
    // what structure annotations should be assigned ?
    const response = await axios.get(url);

    // dispatch is generics function which accepts types args
    dispatch({
      type: 'FETCH_TODOS' /* should be replaced with enums to avoid typo */,
      payload: response.data,
    });
  };
};
