import React from 'react';

import TodoList from './components/TotoList';
import NewTodo from './components/NewTodo';

const App: React.FC = () => {
  const todos = [{ id: 't1', text: 'Finish the course' }];

  return (
    <div className="App">
      <NewTodo />
      <TodoList items={todos}></TodoList>
    </div>
  );
};

export default App;
