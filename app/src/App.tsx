import React from 'react';

import TodoList from './components/TotoList';
import NewTodo from './components/NewTodo';

const App: React.FC = () => {
  const todos = [{ id: 't1', text: 'Finish the course' }];

  const todoAddHandler = (text: string) => {
    console.log(text);
  };

  return (
    <div className="App">
      <NewTodo onAddTodo={todoAddHandler} />
      <TodoList items={todos}></TodoList>
    </div>
  );
};

export default App;
