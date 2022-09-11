import React from "react";

import { useTodos } from "./useTodos";
import { TodoHeader } from "../TodoHeader";
import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch";
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoItem";
import { TodoForm } from "../TodoForm";
import { TodosError } from "../TodosError";
import { TodosLoading } from "../TodosLoading";
import { EmptyTodos } from "../EmptyTodos";
import { CreateTodoButton } from "../CreateTodoButton";
import { Modal } from "../Modal";

function App(props) {

  const {
      error, 
      loading, 
      searchedTodos, 
      completeTodo, 
      deleteTodo,
      openModal,
      setOpenModal,
      totalTodos, 
      completedTodos,
      searchValue, 
      setSearchValue,
      addTodo,
  } = useTodos();

  return (
    <React.Fragment>

        <TodoHeader>

            <TodoCounter
                totalTodos={totalTodos}
                completedTodos={completedTodos}
            />

            <TodoSearch
                searchValue={searchValue}
                setSearchValue={setSearchValue}
            />

        </TodoHeader>

        <TodoList
            error={error}
            loading={loading}
            searchedTodos={searchedTodos}
            onError={() => <TodosError error={error} />}
            onLoading={() => <TodosLoading />}
            onEmptyTodo={() => <EmptyTodos />}
            render={todo => (
                <TodoItem 
                key={todo.text} 
                text={todo.text}
                completed={todo.completed}
                onComplete={() => completeTodo(todo.text)}
                onDelete={() => deleteTodo(todo.text)}
                />
            )}
        />
        
        {!!openModal && (
            <Modal>
                <TodoForm
                    addTodo={addTodo}
                    setOpenedModal={setOpenModal}
                />
            </Modal>  
        )}      

        <CreateTodoButton
            setOpenModal={setOpenModal}
        />
    </React.Fragment>
  );

}

export default App;
