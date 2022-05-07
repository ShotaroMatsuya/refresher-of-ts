import axios from 'axios';
import { Dispatch } from 'redux';
import { ActionTypes } from './types';

export interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

export interface FetchTodosAction {
  type: ActionTypes.fetchTodos;
  payload: Todo[];
}
export interface DeleteTodosAction {
  type: ActionTypes.deleteTodos;
  payload: number;
}

const url = 'https://jsonplaceholder.typicode.com/todos';

export const fetchTodos = () => {
  return async (dispatch: Dispatch) => {
    const response = await axios.get<Todo[]>(url);

    dispatch<FetchTodosAction>({
      type: ActionTypes.fetchTodos,
      payload: response.data,
    });
  };
};
export const deleteTodos = (id: number): DeleteTodosAction => {
  // 非同期関数ではないのでここでのdispatch不要
  return {
    type: ActionTypes.deleteTodos,
    payload: id,
  };
};
