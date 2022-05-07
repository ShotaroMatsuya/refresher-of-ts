import { FetchTodosAction, DeleteTodoAction } from './todos';

// action creator
export enum ActionTypes {
  fetchTodos,
  deleteTodo,
}

export type Action = FetchTodosAction | DeleteTodoAction;
