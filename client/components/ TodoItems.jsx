import React, { useEffect, useState } from 'react';
import TodoItem from './TodoItem';
import CustomLoader from './CustomLoader';

const TodoItems = ({ todos, getTodos, isLoading }) => {


  useEffect(() => {
    getTodos();
  }, []);

  return (
    <section className='mt-3 w-full text-black rounded-[7px]' style={{ background: 'rgba(255, 255, 255, 0.8)' }}>
      {isLoading ? (
        <div className='w-full h-32 text-gray-500 flex items-center justify-center'>
          <CustomLoader />
        </div>
      ) : todos.length === 0 ? (
        <div className='w-full h-32 text-gray-500 flex items-center justify-center'>
          No Task Today
        </div>
      ) : (
        todos.map(todo => (
          <TodoItem key={todo._id} todo={todo} getTodos={getTodos} />
        ))
      )}
    </section>
  );
};

export default TodoItems;
